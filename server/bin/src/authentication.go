package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"
)

type data struct {
	Password string
	Email    string
}

func login(w http.ResponseWriter, r *http.Request) {
	fmt.Println(111)
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	bodyBytes, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	bodyString := string(bodyBytes)
	data := data{}
	json.Unmarshal([]byte(bodyString), &data)
	fmt.Println(data.Email, data.Password)
	if data.Email != "" && data.Password != "" {
		if isRegistered(data.Email, data.Password) {
			fmt.Println(211)
			addCookie(w, "Flag", "True")
		} else {
			fmt.Println(985)
			addCookie(w, "Flag", "False")
		}
	}
	c, _ := r.Cookie("Flag")
	fmt.Println(c)

}

func isRegistered(email string, psw string) bool {
	db := connectDB()
	if loginQuery(db, email, psw) {
		return true
	}
	return false
}

func addCookie(w http.ResponseWriter, name string, value string) {
	fmt.Println(1995121)
	expire := time.Now().AddDate(0, 0, 1)
	cookie := http.Cookie{
		Name:    name,
		Value:   value,
		Expires: expire,
	}
	http.SetCookie(w, &cookie)
}
