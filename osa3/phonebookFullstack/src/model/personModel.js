import mongoose from "mongoose"

const person ={id:Number,
name: String,
phonenumber: Number
}

const schemaPerson = new mongoose.Schema(person);

const personModel = mongoose.model("person",schemaPerson)

export default {personModel}