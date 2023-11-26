import passport from "passport";
import dotenv from "dotenv"
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { User } from "../model/User";
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'


dotenv.config()

const notAuthorizedJson = {status : 401, menssage : 'Não autorizado'}
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY as string | "mqoix992emd0niCOCA2e@jiewd@i9HELLOWORD320@!39"
}

    passport.use(new JWTStrategy(options, async (payload, done)=>{
        const user = await User.findOne({ where : {name : payload.name}})
        if (user) {
            return done(null, user)
        }else{
            return done(notAuthorizedJson, false)
        }
    }
    ))

    export const generateToken = (data: object) =>{
        return jwt.sign(data, process.env.JWT_SECRET_KEY as string | "mqoix992emd0niCOCA2e@jiewd@i9HELLOWORD320@!39", {expiresIn: '1h'})
    }

    export const privateRouter = (req:Request, res:Response, next:NextFunction) =>{
        
        passport.authenticate('jwt', { session: false }, (error: any, user: any, info: any) => {
            req.user = user
            return user ? next() : res.json({sucess : false, error: 'token invalido'})
        })(req, res, next)
    }

    export default passport