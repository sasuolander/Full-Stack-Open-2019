require('dotenv').config()
import {personModel} from "./../model/personModel";


//personModel.find().then(result=>{return await result})
   

const getAll =  () => { 
    return new Promise((resolve, reject) => {
        personModel.find().exec((err,data)=>{
            if (err) reject(err);
            resolve(data)
        })
    })
}
const create = payload => {
    return new Promise((resolve, reject)=>{
        personModel.create(payload,(err,data)=>{
            if (err) reject(err)
            resolve(data)
        })
    })
}
const update = (payload, id) => {};
const remove = idParameter => {personModel.deleteOne({_id:idParameter},err=>{return error})};

export default { getAll, create, update, remove };
