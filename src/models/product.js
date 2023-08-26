import {Schema, model } from "mongoose";

const productschema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String
},{
    timesstamps: true,
    versionKey: false
})
export default model('Product',productschema)
