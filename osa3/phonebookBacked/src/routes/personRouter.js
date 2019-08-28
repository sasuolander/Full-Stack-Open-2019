import express from "express";
import fs from "fs";
const router = express.Router();

const data=fs.readFileSync("./db.json")
const db =JSON.parse(data);



router.get("/persons",(req,res,next)=>{
   // res.writeHead(200,{'content-stype':'application/json'});
    res.json(db)
    
})
router.get("/person/:id",(req,res,next)=>{
    
})
router.post("/person/:id",(req,res,next)=>{
    
})

//update
router.post
("/person/:id",(req,res,next)=>{
    
})
router.delete("/person/:id",(req,res,next)=>{
    
})

export default router;