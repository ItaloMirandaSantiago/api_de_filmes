import { Request, Response } from "express";
import { User } from "../model/User";

type UserType = {
    id: number,
    password: string,
    name: string,
    movies: null | number[] 
}

const deleteMovies = async (req: Request, res:Response)=>{
    let reqUser: UserType = req.user as UserType
    if (req.body.idmovie) {
            let addmovie = reqUser.movies ? reqUser.movies : []
            for (let i = 0; i < addmovie.length; i++) {
               if(req.body.idmovie === addmovie[i]){
                    addmovie.splice(i,1)
                    try{
                        await User.update({movies : addmovie}, {where : {id: reqUser.id}})
                        res.json({sucess : true, movies: addmovie, })
                    }catch(err){
                        res.status(500).json({sucess : false, error : "error interno do servidor"})
                    }
               }
            }
    }else{
        res.status(400).json({sucess : false, error : "parâmetros faltantes"})
    }
}

export default deleteMovies