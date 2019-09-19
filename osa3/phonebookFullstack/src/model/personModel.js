require('dotenv').config()
import mongoose from "mongoose"
import validator from  "mongoose-unique-validator"
import connection from "./../app"

const person ={id:Number,
name: String,
phonenumber: String
}

const schemaPerson = new mongoose.Schema(person);

schemaPerson.plugin(validator)

export const personModel = mongoose.model("person",schemaPerson,"persons")