package main

import (
	"fmt"
	"net/http"
	"regexp"
)

func handler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	if r.Method == "GET" {
		fmt.Fprintf(w, "GET")
	} else if r.Method == "PUT" {
		fmt.Fprintf(w, "PUT")
	}
	fmt.Printf(r.Method)
	re := regexp.MustCompile("^(.+)@golang.org$")
	path := r.URL.Path[1:]
	match := re.FindAllStringSubmatch(path, -1)
	if match != nil {
		fmt.Fprintf(w, "I'm %s\n", match[0][1])
	}
	fmt.Fprintf(w, "You are on go server")
	fmt.Fprintf(w, " %s\n", path)
}

func receiveClientRequest(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json

	r.ParseForm()
	fmt.Println("Got request from client", r.Form)
}

func main() {
	fmt.Println("yeah!")
	http.HandleFunc("/books", getBooks)
	http.HandleFunc("/verses", getVerses)
	http.HandleFunc("/versions", getVersions)
	http.HandleFunc("/chapters", getChapters)
	http.HandleFunc("/verse-text", getVerseText)
	http.HandleFunc("/chapter-text", getChapterText)
	http.ListenAndServe(":8080", nil)
	// db := connectDB()
	// query(db)
}
