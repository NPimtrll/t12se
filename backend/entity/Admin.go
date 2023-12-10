package entity

import (
	
	"gorm.io/gorm"
)

type Admin struct {
	gorm.Model
	Email    string `gorm:"uniqueIndex" valid:"email~รูปแบบ email ไม่ถูกต้อง,required~กรุณากรอก email"`
	Password string
	Name     string `gorm:"uniqueIndex" valid:"มีUserนี้อยู่แล้ว,required~กรุณากรอกชื่อใหม่อีกครั้ง"`
	// Room []Room           `gorm: "foreignKey:AdminID"`
	DormitoryID uint
	Dormitory   *Dormitory `gorm:"references:id"`
}