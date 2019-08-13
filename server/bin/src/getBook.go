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

// type ChapterText struct {
// 	ID        string `json:"id"`
// 	Number    string `json:"number"`
// 	BookID    string `json:"bookId"`
// 	Reference string `json:"reference"`
// 	Content   string `json:"content"`
// 	Previous  string `json:"previous"`
// 	Next      string `json:"next"`
// }

func getVersions(w http.ResponseWriter, r *http.Request) {

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
		fmt.Fprintln(w, bodyString)
	}
}

func getBooks(w http.ResponseWriter, r *http.Request) {
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
		books := books{}
		err = json.Unmarshal([]byte(bodyString), &books)
		for _, book := range books.Data {
			fmt.Println(book.ID)
			fmt.Println(book.Abbreviation)
		}
	}
}

func getChapters(w http.ResponseWriter, r *http.Request) {
	client := &http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-01/books/EXO/chapters", nil)
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
		chapters := chapters{}
		err = json.Unmarshal([]byte(bodyString), &chapters)
		for _, chapter := range chapters.Data {
			fmt.Println(chapter.Number)
			fmt.Println(chapter.Reference)
		}
	}
}

func getChapterText(w http.ResponseWriter, r *http.Request) {
	client := &http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-01/chapters/EXO.1", nil)
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
		chaptersText := text{}
		err = json.Unmarshal([]byte(bodyString), &chaptersText)
		fmt.Println(chaptersText.Data.(map[string]interface{})["bookId"].(string))
		fmt.Println(chaptersText.Data.(map[string]interface{})["next"].(map[string]interface{})["bookId"].(string))
	}
}

func getVerses(w http.ResponseWriter, r *http.Request) {
	client := http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-01/chapters/EXO.1/verses", nil)
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
		for _, verse := range verses.Data {
			fmt.Println(verse.Reference)
		}
	}
}

func getVerseText(w http.ResponseWriter, r *http.Request) {
	client := &http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-01/verses/EXO.1.1?include-chapter-numbers=false&include-verse-numbers=false", nil)
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
		fmt.Println(versesText.Data.(map[string]interface{})["reference"].(string))
		fmt.Println(versesText.Data.(map[string]interface{})["next"].(map[string]interface{})["id"].(string))
	}
}