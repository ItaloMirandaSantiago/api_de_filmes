import express, {ErrorRequestHandler, Request, Response} from 'express'
import dotenv from 'dotenv'
import apiRoutes from "./routes/routes"
import cors from 'cors'

dotenv.config()

const server = express()

server.use(cors())

server.use(express.urlencoded({extended: true}))

server.use(apiRoutes)

server.listen(process.env.PORT)

server.use((req: Request, res: Response)=>{
    res.status(404)
    res.json({error : 404})
})

const erro : ErrorRequestHandler = (err, req, res, next) =>{
    res.status(400)
    console.log(err)
    res.json({error: 'Ocorreu um erro no servidor'})
}

server.use(erro)
