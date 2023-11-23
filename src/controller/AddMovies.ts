import { Request, Response } from "express";
import { User } from "../model/User";

type UserType = {
    id: number,
    password: string,
    name: string,
    movies: null | number[] 
}

const addMovies = async (req: Request, res:Response)=>{
    let reqUser: UserType = req.user as UserType
    console.log(req.body)
    if (req.body.idmovie) {
            let addmovie = reqUser.movies ? reqUser.movies : []
            if (addmovie.includes(req.body.idmovie)) {
                return res.json({ success: false, error: 'Conteúdo já adicionado' })
            }
            addmovie.push(req.body.idmovie)
            try{
                await User.update({movies : addmovie}, {where : {id: reqUser.id}})
                res.json({sucess : true, movies: addmovie, })
            }catch(err){
                res.status(500).json({sucess : false, error : "error interno do servidor"})
            }
    }else{
        res.json({sucess : false, menssage: 'Parâmetro faltante'})
    }
}

export default addMovies