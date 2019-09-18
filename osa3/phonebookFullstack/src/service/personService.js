import mongoose from "mongoose";
import personModel from "./../model/personModel";

const getAll = () => {};
const create = payload => {personModel.create(payload,err=>{
    return error
})};
const update = (payload, id) => {};
const remove = idParameter => {personModel.deleteOne({id:idParameter},err=>{return error})};

export default { getAll, create, update, remove };
