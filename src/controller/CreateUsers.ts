import { Response, Request } from "express";
import { User } from "../model/User";
import argon2 from 'argon2'
import { generateToken } from "../config/passport";

type usertype = {
    id : number,
    name: string,
    password: string
}

 const create = async (req: Request, res: Response) =>{
    const {name, password } : {name: string, password : string} = req.body
    if (name && password) {
        let verification = await User.findOne({where : {name}})

        if (!verification) {
            const hash: string = await argon2.hash(password)
            let user: usertype = await User.create({name, password : hash})
            const token = generateToken({name})
            res.json({sucess: true, token, userName : user.name}) 
        } else{
            res.json({error : 'Usuário já existente'});            
        } 
    }else{
        res.json({error : 'paramêtro faltante'});
    }
}

export default create