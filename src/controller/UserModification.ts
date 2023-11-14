import { Response, Request } from "express"
import { User } from "../model/User"

const UserModification = async (req: Request, res: Response) =>{
    const {name, password} = req.body
    const userbd = await User.findOne({where : {name, password}})
    if (userbd) {
        userbd.update({
            name,
            password
        })
        res.json({sucess : true})
    }else{
        res.json({error : 'Usuário não encontrado'})
    }
}

export default UserModification