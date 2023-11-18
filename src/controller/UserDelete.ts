import { Request, Response } from "express";
import { User } from "../model/User";
import argon2 from 'argon2'

const UserDelete = async (req: Request, res: Response) =>{
    const {name, password} = req.body
    const hash: string = await argon2.hash(password)
    
    const userbd = await User.findOne({where : {name, password: hash}})
    if (userbd) {
        await User.destroy({where : {name, hash}})
        res.json({sucess : true})
    }else{
        res.json({error : 'Usuário não encontrado'})
    }
}

export default UserDelete