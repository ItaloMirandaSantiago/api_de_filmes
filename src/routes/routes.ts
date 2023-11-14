import { Router } from 'express'
import Create from "../controller/CreateUsers"
import UserModification from '../controller/UserModification'
import UserDelete from '../controller/UserDelete'

const router = Router()

router.post("/create", Create)
router.put("/upload", UserModification)
router.delete("/delete", UserDelete)

export default router