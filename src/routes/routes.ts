import { Router, Request, Response } from 'express'
import Create from "../controller/CreateUsers"
import UserModification from '../controller/UserModification'
import UserDelete from '../controller/UserDelete'
import { privateRouter } from '../config/passport'
import Login from '../controller/LoginUser'
import addMovies from '../controller/AddMovies'
import deleteMovies from '../controller/deleteMovies'
import ResTokenValid from '../controller/ResTokenValid'
import GetMovies from '../controller/GetMovies'


const router = Router()

router.get('/ping', (req: Request, res: Response)=>{
    res.json({pong: true})
})
router.post("/create", Create)
router.get("/ValidToken", privateRouter, ResTokenValid)
router.put("/upload", UserModification)
router.post('/login', Login)
router.post('/addMovies', privateRouter, addMovies)
router.get('/addMovies', privateRouter, GetMovies)
router.delete('/removeMovies', privateRouter, deleteMovies)
router.delete("/delete", UserDelete)

export default router