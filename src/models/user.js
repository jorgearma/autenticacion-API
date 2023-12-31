import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    roles:[{
        ref:"role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})

userSchema.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}

userSchema.statics.comparepassword = async (password, receivedPassword) =>{
    return await bcrypt.compare(password,receivedPassword)
}
export default model('user',userSchema)