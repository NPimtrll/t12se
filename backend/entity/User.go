package entity

import (
	
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email    string `gorm:"uniqueIndex" valid:"email~รูปแบบ email ไม่ถูกต้อง,required~กรุณากรอก email"`
	Password string
}
