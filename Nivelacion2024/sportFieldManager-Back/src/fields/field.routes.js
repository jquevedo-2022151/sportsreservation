import { Router } from "express";
import {addField, getFields } from "./field.controller.js"
import { uploadFieldImage } from "../../middlewares/multer-uploads.js";
import { addFieldValidator } from "../../middlewares/check-validators.js";

const api = Router();

api.post("/addField", uploadFieldImage.single("photo"), addFieldValidator, addField);
api.get("/getFields", getFields);

export default api;
