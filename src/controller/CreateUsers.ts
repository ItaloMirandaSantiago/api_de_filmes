import { Response, Request } from "express";
import { User } from "../model/User";
import argon2 from 'argon2'

 const create = async (req: Request, res: Response) =>{
    const {name, password } : {name: string, password : string} = req.body
    
    if (name && password) {
        let verification = await User.findOne({where : {name}})

        if (!verification) {
            const hash: string = await argon2.hash(password)
            await User.create({name, password : hash})
            res.json({sucess: true, User}) 
        } else{
            res.json({error : 'Usuário já existente'});            
        } 
    }else{
        res.json({error : 'paramêtro faltante'});
    }
}

export default create