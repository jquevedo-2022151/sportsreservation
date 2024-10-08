import { Router } from "express"
import { reserveField, userReservations } from './reservation.controller.js'
import { uploadReservationImage } from "../../middlewares/multer-uploads.js"

import { validateJwt } from "../../middlewares/check-jwt.js"
import { addReservation } from "../../middlewares/check-validators.js"


const api = Router()

api.post(
    '/addReservation', 
    validateJwt, 
    addReservation,
    uploadReservationImage.single('payment'), 
    reserveField
);

api.get(
    '/myReservations',
    validateJwt,
    userReservations
)
export default api