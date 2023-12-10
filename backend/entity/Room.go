package entity

import (
	
	"gorm.io/gorm"
)

type Room struct {
	gorm.Model
	Capacity int
	RoomName string
	Price float32
	// Booking []Booking `gorm: "foreignKey:RoomID"`
	RoomTypeID   uint
	RoomType     *RoomType `gorm:"references:id"`
	RoomstatusID uint
	Roomstatus   *Roomstatus `gorm:"references:id"`
	AdminID      uint
	Admin        *Admin `gorm:"references:id"`
	DormitoryID  uint
	Dormitory    Dormitory `gorm:"references:id"`
}