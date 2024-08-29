import { Schema, model, version } from "mongoose"

const userSchema = Schema(
    {
        name: {
            type: String,
            maxheight:30, 
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        profilePicture: String
    },
    {
        versionKey: false
    }
)

export default model("User", userSchema)