import multer from "multer"
import createCloudinaryStorage, { CloudinaryStorage } from "multer-storage-cloudinary"
import cloudinary from 'cloudinary'
import { extname }from 'path'
import { config } from "dotenv"

config()

console.log("Cloud Name:", process.env.CLOUD_NAME);
console.log("API Key:", process.env.API_KEY);
console.log("API Secret:", process.env.API_SECRET);

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const profileImageStorage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params:{
        folder: 'profiles',
        public_id: (req, file) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            return `${fileName}-${Date.now()}`;
        }
    }
})

const reservationImageStorage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params:{
        folder: 'reservation',
        public_id: (req, file) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            return `${fileName}-${Date.now()}`;
        }
    }
})

export const uploadProfileImage = multer({
    storage: profileImageStorage,
    fileFilter: (req, file, cb)=>{
        cb(null, true)
    },
    limits:{
        fileSize: 10000000
    }
})

export const uploadFieldImage = multer({
    storage: profileImageStorage,
    fileFilter: (req, file, cb)=>{
        cb(null, true)
    },
    limits:{
        fileSize: 10000000
    }
})

export const uploadReservationImage = multer({
    storage: reservationImageStorage,
    fileFilter: (req, file, cb)=>{
        cb(null, true)
    },
    limits:{
        fileSize: 10000000
    }
})