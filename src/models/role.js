import { Schema, model } from "mongoose";

const roleschema = new Schema({
    name: String,
},{
    versionKey: false
})

export default model('Role',roleschema)