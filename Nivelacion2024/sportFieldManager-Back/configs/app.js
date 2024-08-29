import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import authRoutes from '../src/auth/auth.routes.js'
import fieldRoutes from '../src/fields/field.routes.js'
import reservationRoutes from '../src/reservations/reservation.routes.js'
import { dbConnection } from './mongo.js'

const app = express()

export class ExpressServer {
  constructor() {
    this.urlBase = '/sportsFieldManager/v1'
        this.app = express()
        this.middleware()
        this.connectDB()
        this.routes()
    }
    async connectDB() {
        await dbConnection()
    }

    middleware() {
        this.app.use(cors())
        this.app.use(express.json()); // Agrega esta línea
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(helmet())
        this.app.use(morgan('dev'))
    }
    routes(){
        this.app.use(`${this.urlBase}/auth`, authRoutes)
        this.app.use(`${this.urlBase}/field`, fieldRoutes)
        this.app.use(`${this.urlBase}/reservation`, reservationRoutes)
    }

    listen() {
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server HTTP is running in port ${process.env.PORT}`)
        })
    }
}

/*
export const initServer = () =>{
    app.listen(3226)
    console.log('Servidor http corriendo')
}

initServer()

*/