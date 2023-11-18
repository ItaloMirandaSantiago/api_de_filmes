import { Router } from 'express'
import Create from "../controller/CreateUsers"
import UserModification from '../controller/UserModification'
import UserDelete from '../controller/UserDelete'
import { privateRouter } from '../config/passport'
import Login from '../controller/LoginUser'
import addMovies from '../controller/AddMovies'
import deleteMovies from '../controller/deleteMovies'


const router = Router()

router.post("/create", Create)
router.put("/upload", UserModification)
router.get('/login', Login)
router.post('/addMovies', privateRouter, addMovies)
router.delete('/removeMovies', privateRouter, deleteMovies)
router.delete("/delete", UserDelete)

export default router