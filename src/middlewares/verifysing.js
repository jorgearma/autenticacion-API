import { ROLES } from "../models/role";
import User from "../models/user";


export const checkduplics = async (req,res,nexts) => {
    const user = await User.findOne({username: req.body.username})
    if (user){
        return res.status(400).json({
            message: "the user alrady exists"
        })
    }
    const email = await User.findOne({email: req.body.email})
    if (email){
        return res.status(400).json({
            message: "the email alrady exist"
        })
    }
    nexts()
}

export const checkroleexist = (req,res,next) =>{
    console.log('holaaa');
    if (req.body.roles) {
        for (let i = 0; i  < req.body.roles.length ; i++) {
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    mesage: `role ${req.body.roles[i]} does not exist`
                })
            }
        }
    }
    next()
}
