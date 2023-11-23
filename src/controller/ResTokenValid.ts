import { Response, Request } from "express";

const ResTokenValid = async (req: Request, res: Response) =>{
    res.json({sucess : true})
}

export default ResTokenValid