import { Response, Request } from "express"
import { User } from "../model/User"
import argon2 from 'argon2'

const UserModification = async (req: Request, res: Response) =>{
    const {name, password} = req.body
    const hash: string = await argon2.hash(password)
    const userbd = await User.findOne({where : {name, password: hash}})
    if (userbd) {
        userbd.update({
            name,
            password: hash
        })
        res.json({sucess : true})
    }else{
        res.json({error : 'Usuário não encontrado'})
    }
}

export default UserModification