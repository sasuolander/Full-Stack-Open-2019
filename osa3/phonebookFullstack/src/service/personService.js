require('dotenv').config()
import {personModel} from "./../model/personModel";

const getAll =  () => { 
    return new Promise((resolve, reject) => {
        personModel.find().exec((err,data)=>{
            if (err) reject(err);
            resolve(data.map(element => element.toJSON()))
        })
    })
}

const findByID = idParameter => {
    return new Promise((resolve, reject) => {
        personModel.findById(idParameter).exec((err,data)=>{
            if (err) reject(err);
            resolve(data)
        });
    })}
    
const save = payload => {
    return new Promise((resolve, reject)=>{
        const newPerson=new personModel(payload)
        newPerson.save((err)=>{
            if (err) reject(err)
            resolve(newPerson.toJSON())
        })
    })
}
const update = (payload, id) => {};
const remove = id => {
    return new Promise((resolve, reject)=>{
        personModel.findByIdAndDelete(id,(err,doc)=>{
            if (err) reject(err)
            resolve("success")
        })
    })
};

export default { getAll,findByID, save, update, remove };
