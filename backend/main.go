package main

import (
	"github.com/gin-gonic/gin"

	admin_controller "github.com/NPimtrll/se-66-stock/controller/admin"
	login_controller "github.com/NPimtrll/se-66-stock/controller/login"
	user_controller "github.com/NPimtrll/se-66-stock/controller/user"

	"github.com/NPimtrll/se-66-stock/entity"
)

func main() {
	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	// login User Route
	r.POST("/login/user", login_controller.LoginUser)
	r.POST("/users", user_controller.CreateUser)

	// login Admin Route
	r.POST("/login/admin", login_controller.LoginAdmin)
	r.POST("/admin", admin_controller.CreateAdmin)

	r.Run()
}


func CORSMiddleware() gin.HandlerFunc {

	return func(c *gin.Context) {

		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")

		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")

		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT,PATCH,DELETE")

		if c.Request.Method == "OPTIONS" {

			c.AbortWithStatus(204)

			return

		}

		c.Next()

	}

}