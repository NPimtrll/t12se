package entity

import (
	
	"gorm.io/gorm"
	"time"
)

type Booking struct {
	gorm.Model
	BookingDate time.Time
	RoomID      uint
	Room        *Room `gorm:"references:id"`
	DormitoryID uint
	Dormitory   *Dormitory `gorm:"references:id"`
	// UserID *uint
	// User User  `gorm:"references:id"`
}