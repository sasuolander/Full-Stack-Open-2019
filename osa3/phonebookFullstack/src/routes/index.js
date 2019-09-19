require("dotenv").config();
import express from "express";
import personService from "./../service/personService";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "PhonebookAPP" });
});
router.get("/info", (req, res, next) => {
  const date = new Date();
  personService.getAll().then(
    result => {
      console.log(result);
      res.render("info", { count: result.length, timetamp: date });
    },
    reject => {
      res.render("info", { count: 0, timetamp: date });
    }
  );
});

export default router;
