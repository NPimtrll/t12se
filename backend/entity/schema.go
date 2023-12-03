package entity

import (
	"time"

	"gorm.io/gorm"
)

type Room struct{
	gorm.Model
	Capacity int
	Booking []Booking `gorm: "foreignKey:RoomID"`
	RoomTypeID  *uint
	RoomType    RoomType `gorm:"references:id"`
	RoomstatusID *uint 
	Roomstatus  Roomstatus `gorm:"references:id"`
	AdminID      *uint
	Admin       Admin  `gorm:"references:id"`
	DormitoryID  *uint
	Dormitory    Dormitory `gorm:"references:id"`
}

type RoomType struct{
	gorm.Model
	Name  string
	Room []Room `gorm: "foreignKey:RoomTypeID"`
}

type Roomstatus struct{
	gorm.Model
	Name string
	Room []Room `gorm: "foreignKey:RoomstatusID"`
}

type Admin struct{
	gorm.Model
	Email    string `gorm:"uniqueIndex" valid:"email~รูปแบบ email ไม่ถูกต้อง,required~กรุณากรอก email"`
	Password    string
	Name        string    `gorm:"uniqueIndex" valid:"มีUserนี้อยู่แล้ว,required~กรุณากรอกชื่อใหม่อีกครั้ง"`
	Room []Room `gorm: "foreignKey:AdminID"`
	DormitoryID  *uint
	Dormitory    Dormitory `gorm:"references:id"`
}

type Booking struct{
	gorm.Model
	BookingDate time.Time
	RoomID      *uint
	Room Room      `gorm:"references:id"`
	DormitoryID  *uint
	Dormitory    Dormitory `gorm:"references:id"`
	UserID *uint
	User User  `gorm:"references:id"`
}

type Dormitory struct{
	gorm.Model
	Dormitory_Name string
	Dormitory_Address string
	Dormitory []Dormitory  `gorm: "foreignKey:DormitoryID"`
}