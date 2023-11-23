import { Request, Response } from "express";
import { User } from "../model/User";

type UserType = {
    id: number,
    password: string,
    name: string,
    movies: null | number[] 
}

const GetMovies = async (req: Request, res:Response)=>{
    let reqUser: UserType = req.user as UserType
    console.log(reqUser)
    if (reqUser) {           
        res.json({sucess : true, movies: reqUser.movies})
    }else{
        res.json({sucess: false, menssage: "Usuário não encontrado"})
    }
}

export default GetMovies