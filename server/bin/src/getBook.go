package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"reflect"
)

type T struct {
	Data []Msg `json:"data"`
}

type Msg struct {
	ID           string `json:"id"`
	Abbreviation string `json:"abbreviation"`
}

func getVersions(w http.ResponseWriter, r *http.Request) {

	client := &http.Client{}
	request, err := http.NewRequest("GET", "https://api.scripture.api.bible/v1/bibles", nil)
	request.Header.Set("api-key", "a93ffc2f6780bad2a25dbab5136df97e")
	if err != nil {
		os.Exit(1)
	}
	resp, err := client.Do(request)
	defer resp.Body.Close()
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
	defer resp.Body.Close()
	if resp.StatusCode == http.StatusOK {
		bodyBytes, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			os.Exit(1)
		}
		bodyString := string(bodyBytes)
		t_struct := T{}
		fmt.Println(reflect.TypeOf(bodyString))
		err = json.Unmarshal([]byte(bodyString), &t_struct)
		fmt.Println(t_struct)
	}
}
