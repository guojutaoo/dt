package main

import (
	"database/sql"
	"fmt"
	"strings"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "guojutao"
	dbname   = "authentication"
)

func connectDB() *sql.DB {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		panic(err)
	}
	return db
}
func loginQuery(db *sql.DB, email string, psw string) bool {
	var username, password string

	rows, err := db.Query("select * from userdata")

	if err != nil {
		fmt.Println(err)
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&username, &password)
		if strings.Compare(email, username) == 0 && strings.Compare(psw, password) == 0 {
			return true
		}
		if err != nil {
			fmt.Println(err)
		}
	}
	// fmt.Println(username, password)
	return false
}
