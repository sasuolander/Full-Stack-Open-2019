require('dotenv').config()
import mongoose from "mongoose"
import connection from "./../app"

const person ={id:Number,
name: String,
phonenumber: String
}

const schemaPerson = new mongoose.Schema(person);

export const personModel = mongoose.model("person",schemaPerson,"persons")