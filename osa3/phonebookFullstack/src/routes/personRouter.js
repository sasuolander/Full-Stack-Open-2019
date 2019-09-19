require("dotenv").config();
import express from "express";
import { db } from "./../app";
import fs from "fs";
import personService from "./../service/personService";

const router = express.Router();
const dir = `${__dirname}/../../db.json`;

router.get("/persons", (req, res, next) => {
  // res.writeHead(200,{'content-stype':'application/json'});
  const persons = personService.getAll();
  persons.then(result => {
    res.json({
      status: "success",
      data: {
        persons: result
      }
    });
  });
});
router.get("/persons/:id", (req, res, next) => {
  const personID = req.params.id * 1,
    person = db.find(person => person.id === personID);

  if (person === undefined) {
    //console.log("undefined")
    res.status(404).send("not found");
  }

  res.status(200).json({
    status: "success",
    data: {
      person: person
    }
  });
});
router.post("/persons/", (req, res, next) => {
  const newPerson = Object.assign(req.body);
  const nameAndPhonenumberIsFound =
    req.body.name !== undefined && req.body.phonenumber !== undefined;

  if (nameAndPhonenumberIsFound) {
    personService.save(newPerson).then(
      output => {
        res.status(201).json({
          status: "success",
          data: {
            person: output
          }
        });
      },
      reject => {
        res.status(400).json({
          status: "fail",
          info: reject.message
        });
      }
    );
  } else {
    res.status(400).json({
      status: "fail",
      info: "name or phonenumber is not found"
    });
  }
});
//update
//router.post("/person/:id", (req, res, next) => {});

router.delete("/persons/:id", (req, res, next) => {
  const personID = req.params.id * 1;
  const personsList = db.filter(person => person.id != personID);
  fs.writeFile(dir, JSON.stringify(personsList), err => {
    console.log("err", err);
    res.status(201).json({
      status: "success",
      data: null
    });
  });
});

export default router;
