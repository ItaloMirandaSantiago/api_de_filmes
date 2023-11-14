import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import apiRoutes from "./routes/routes"

dotenv.config()

const server = express()

server.use(express.urlencoded({extended: true}))

server.use(apiRoutes)

server.listen(process.env.PORT)

server.use((req: Request, res: Response)=>{
    res.status(404)
    res.json({error : 404})
})