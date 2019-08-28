import express from "express";
import {db} from "./personRouter"
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('index', { title: 'PhonebookAPP' });
});
router.get('/info',(req, res, next)=> {
  console.log(db)
  const count = db.length;
  const date = new Date()
  
  res.render('info', { count: count,timetamp:date});
});

export default router;
