package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Data struct {
	Password string
	Email    string
}

func login(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST", "OPTIONS":
		decoder := json.NewDecoder(r.Body)
		var data Data
		log.Println(decoder)
		decoder.Decode(&data)
		fmt.Println(data.Password, data.Email)
		if len(data.Email) > 0 && len(data.Password) > 0 {
			if isRegistered(data.Email, data.Password) {
				fmt.Fprintln(w, true)
			} else {
				fmt.Fprintln(w, false)
			}
		}
	case "GET":
		fmt.Println(r.Method)
	}
}

func isRegistered(email string, psw string) bool {
	db := connectDB()
	if loginQuery(db, email, psw) {
		return true
	}
	return false
}
