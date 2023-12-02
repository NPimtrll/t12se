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
	FistNasme string
	LastName string
	Phone int
	Email string
	Username string
	password string
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
	TenantID *uint
	Tenant Tenant  `gorm:"references:id"`
}

type Dormitory struct{
	gorm.Model
	Dormitory_Name string
	Dormitory_Address string
	Dormitory []Dormitory  `gorm: "foreignKey:DormitoryID"`
}