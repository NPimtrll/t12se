package entity

import (
	"gorm.io/driver/sqlite"

	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {

	return db

}

func SetupDatabase() {

	database, err := gorm.Open(sqlite.Open("se-66.db"), &gorm.Config{})

	if err != nil {

		panic("failed to connect database")

	}

	// Migrate the schema

	database.AutoMigrate(&Dormitory{}, &Booking{}, &Admin{}, &Roomstatus{}, &RoomType{},&Room{},&User{})

	db = database

	// Dormitory Data
	Dormitorynumber1 := Dormitory{
		Dormitory_Name: "1",
		
	}
	db.Model(&Dormitory{}).Create(&Dormitorynumber1)

	Dormitorynumber2 := Dormitory{
		Dormitory_Name: "2",
		
	}
	db.Model(&Dormitory{}).Create(&Dormitorynumber2)

	



}
