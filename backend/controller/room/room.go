package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/B6409388/se-66-stock/entity"
)

// POST /Rooms
func CreateRoom(c *gin.Context) {
	var Room entity.Room
	var dormitory entity.Dormitory

	// bind เข้าตัวแปร Room
	if err := c.ShouldBindJSON(&Room); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา Dormitory ด้วย id
	if tx := entity.DB().Where("id = ?", Room.DormitoryID).First(&dormitory); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Dormitory not found"})
		return
	}

	// สร้าง Room
	u := entity.Room{
		Dormitory:   dormitory,         // โยงความสัมพันธ์กับ Entity Dormitory
		Capacity: Room.Capacity,        // ตั้งค่าฟิลด์ Capacity
		RoomName:  Room.RoomName,       // ตั้งค่าฟิลด์ RoomName
		Price:     Room.Price,         // ตั้งค่าฟิลด์ Price
	
	}

	// บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": u})
}

// GET /Room/:id
func GetRoom(c *gin.Context) {
	var Room entity.Room
	id := c.Param("id")
	if err := entity.DB().Preload("Dormitory").Raw("SELECT * FROM Rooms WHERE id = ?", id).Find(&Room).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": Room})
}

// GET /Rooms
func ListRooms(c *gin.Context) {
	var Rooms []entity.Room
	if err := entity.DB().Preload("Dormitory").Raw("SELECT * FROM Rooms").Find(&Rooms).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": Rooms})
}

// DELETE /Rooms/:id
func DeleteRoom(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM Rooms WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Room not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /Rooms
func UpdateRoom(c *gin.Context) {
	var Room entity.Room
	var result entity.Room

	if err := c.ShouldBindJSON(&Room); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา Room ด้วย id
	if tx := entity.DB().Where("id = ?", Room.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Room not found"})
		return
	}

	if err := entity.DB().Save(&Room).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": Room})
}