package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

type books struct {
	Data []book `json:"data"`
}

type book struct {
	ID           string `json:"id"`
	Name         string `json:"name"`
	NameLong     string `json:"nameLong"`
	Abbreviation string `json:"abbreviation"`
}

type chapters struct {
	Data []chapter `json:"data"`
}

type chapter struct {
	ID        string `json:"id"`
	BibleID   string `json:"bibleId"`
	Number    string `json:"number"`
	BookID    string `json:"bookId"`
	Reference string `json:"reference"`
}

type verses struct {
	Data []verse `json:"data"`
}

type verse struct {
	ID        string `json:"id"`
	OrgID     string `json:"orgId"`
	BookID    string `json:"bookId"`
	ChapterID string `json:"chapterId"`
	Reference string `json:"reference"`
}

type text struct {
	Data interface{} `json:"data"`
}

type url struct {
	URL string `json:"url"`
}

func getVersions(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	client := &http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles", nil)
	request.Header.Set("api-key", "a93ffc2f6780bad2a25dbab5136df97e")
	if err != nil {
		os.Exit(1)
	}
	resp, err := client.Do(request)
	if resp.StatusCode == http.StatusOK {
		bodyBytes, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			os.Exit(1)
		}
		bodyString := string(bodyBytes)
		fmt.Fprintf(w, bodyString)
	}
}

func getBooks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")
	client := &http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-01/books", nil)
	request.Header.Set("api-key", "a93ffc2f6780bad2a25dbab5136df97e")
	if err != nil {
		os.Exit(1)
	}
	resp, err := client.Do(request)
	if resp.StatusCode == http.StatusOK {
		bodyBytes, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			os.Exit(1)
		}
		bodyString := string(bodyBytes)
		fmt.Fprintln(w, bodyString)
	}
}

func getChapters(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	// path := r.URL.Path[10:]                                        //EXO
	bodyBytes, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	bodyString := string(bodyBytes)
	url := url{}
	_ = json.Unmarshal([]byte(bodyString), &url)
	client := &http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-01/books/"+url.URL+"/chapters", nil)
	request.Header.Set("api-key", "a93ffc2f6780bad2a25dbab5136df97e")
	if err != nil {
		os.Exit(1)
	}
	resp, err := client.Do(request)
	if resp.StatusCode == http.StatusOK {
		bodyBytes, err = ioutil.ReadAll(resp.Body)
		if err != nil {
			os.Exit(1)
		}
		bodyString = string(bodyBytes)
		fmt.Println(bodyString)
		fmt.Fprintln(w, bodyString)
	}
}

func getChapterText(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	bodyBytes, err := ioutil.ReadAll(r.Body)                       //EXO.1
	if err != nil {
		fmt.Println(err)
	}
	bodyString := string(bodyBytes)
	url := url{}
	_ = json.Unmarshal([]byte(bodyString), &url)
	client := &http.Client{}
	fmt.Println(url.URL)
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-01/chapters/"+url.URL, nil)
	request.Header.Set("api-key", "a93ffc2f6780bad2a25dbab5136df97e")
	if err != nil {
		os.Exit(1)
	}
	resp, err := client.Do(request)
	if resp.StatusCode == http.StatusOK {
		bodyBytes, err = ioutil.ReadAll(resp.Body)
		if err != nil {
			os.Exit(1)
		}
		bodyString = string(bodyBytes)
		fmt.Fprintf(w, bodyString)
	}
}

func getVerses(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	path := r.URL.Path[8:]                                         //EXO.1
	fmt.Fprintf(w, path)
	client := http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-01/chapters/"+path+"/verses", nil)
	request.Header.Set("api-key", "a93ffc2f6780bad2a25dbab5136df97e")
	if err != nil {
		os.Exit(1)
	}
	resp, err := client.Do(request)
	if resp.StatusCode == http.StatusOK {
		bodyBytes, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			os.Exit(1)
		}
		bodyString := string(bodyBytes)
		verses := verses{}
		err = json.Unmarshal([]byte(bodyString), &verses)
		// for _, verse := range verses.Data {
		// 	fmt.Fprintf(w, verse.Reference)
		// }
		jData, err := json.Marshal(verses)
		json.NewEncoder(w).Encode(jData)
	}
}

func getVerseText(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	path := r.URL.Path[12:]                                        //EXO.1.1
	fmt.Fprintf(w, path)
	client := &http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-01/verses/"+path+"?include-chapter-numbers=false&include-verse-numbers=false", nil)
	request.Header.Set("api-key", "a93ffc2f6780bad2a25dbab5136df97e")
	if err != nil {
		os.Exit(1)
	}
	resp, err := client.Do(request)
	if resp.StatusCode == http.StatusOK {
		bodyBytes, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			os.Exit(1)
		}
		bodyString := string(bodyBytes)
		versesText := text{}
		err = json.Unmarshal([]byte(bodyString), &versesText)
		fmt.Fprintf(w, versesText.Data.(map[string]interface{})["reference"].(string))
		fmt.Fprintf(w, versesText.Data.(map[string]interface{})["next"].(map[string]interface{})["id"].(string))
	}
}
