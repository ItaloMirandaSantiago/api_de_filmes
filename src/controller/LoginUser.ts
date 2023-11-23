import { Response, Request } from "express";
import { User } from "../model/User";
import argon2 from 'argon2'
import { generateToken } from "../config/passport";


const Login = async (req: Request, res: Response) =>{
    const {name, password } : {name: string, password : string} = req.body
    console.log(name, password, req.body)
    if (name && password) {

        const user = await User.findOne({where : {name}})

        if (user) {

            const token = generateToken({name})

            const hashValid = await argon2.verify(user.password, password)

            if (hashValid) {
                res.json({status: true, token})
            }else{
                res.json({error : "Usuário não encontrado"})
            }
        }else{
            res.json({error : "Usuário não encontrado"})
        }
    }else{
        res.json({sucess: false, error : 'requisições indefinidas '})
    }
}

export default Login