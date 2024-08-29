import { Router } from "express"
import { login, register } from './auth.controller.js'
import { registerValidator } from "../../middlewares/check-validators.js"
import { uploadProfileImage } from "../../middlewares/multer-uploads.js"

const api = Router()

api.post('/register', uploadProfileImage.single("profilePicture"), registerValidator, register)
api.post('/login', login)

export default api