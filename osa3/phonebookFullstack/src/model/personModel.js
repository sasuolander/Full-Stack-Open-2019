require("dotenv").config();
import mongoose from "mongoose";
import validator from "mongoose-unique-validator";

const person = {
  name: { type: String, unique: true },
  phonenumber: String
};

const schemaPerson = new mongoose.Schema(person);

schemaPerson.plugin(validator);

schemaPerson.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export const personModel = mongoose.model("person", schemaPerson, "persons");
