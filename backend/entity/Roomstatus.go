package entity

import (
	
	"gorm.io/gorm"
)

type Roomstatus struct {
	gorm.Model
	Name string
	// Room []Room `gorm: "foreignKey:RoomstatusID"`
}