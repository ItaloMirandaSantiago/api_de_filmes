import { Request, Response } from "express";
import { User } from "../model/User";

const UserDelete = async (req: Request, res: Response) =>{
    const {name, password} = req.body
    const userbd = await User.findOne({where : {name, password}})
    if (userbd) {
        await User.destroy({where : {name, password}})
        res.json({sucess : true})
    }else{
        res.json({error : 'Usuário não encontrado'})
    }
}

export default UserDelete