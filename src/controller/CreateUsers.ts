import { Response, Request } from "express";
import { User } from "../model/User";

 const create = async (req: Request, res: Response) =>{
    const {name, password } : {name: string, password : string} = req.body
    
    if (name && password) {
        let verification = await User.findOne({where : {name}})

        if (!verification) {
            await User.create({name, password})
            res.json({sucess: true}) 
        } else{
            res.json({error : 'Usuário já existente'});            
        } 
    }else{
        res.json({error : 'paramêtro faltante'});
    }
}

export default create