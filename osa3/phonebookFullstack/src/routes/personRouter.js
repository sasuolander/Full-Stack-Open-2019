require("dotenv").config();
import express from "express";
import personService from "./../service/personService";

const router = express.Router();
const { getAll, findByID, save, update, remove } = personService;

router.get("/persons", (req, res, next) => {
  getAll().then(
    result => {
      res.status(200).json({
        status: "success",
        data: {
          persons: result
        }
      });
    },
    reject => {
      res.status(404).json({
        status: "fail",
        info: "search failed"
      });
    }
  );
});
router.get("/persons/:id", (req, res, next) => {
  findByID(req.params.id).then(
    result => {
      res.status(200).json({
        status: "success",
        data: {
          persons: result
        }
      });
    },
    reject => {
      res.status(404).json({
        status: "fail",
        info: "search failed"
      });
    }
  );
});

router.post("/persons/", (req, res, next) => {
  const newPerson = Object.assign(req.body),
    { name, phonenumber } = req.body,
    nameAndPhonenumberIsFound = name !== undefined && phonenumber !== undefined;

  if (nameAndPhonenumberIsFound) {
    save(newPerson).then(
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
      info: "name or phonenumber field is not found"
    });
  }
});
//update
//router.post("/person/:id", (req, res, next) => {});

router.delete("/persons/:id", (req, res, next) => {
  const { id } = req.params;
  remove(id).then(
    result => {
      res.status(202).json({
        status: "success",
        data: null
      });
    },
    reject => {
      res.status(400).json({
        status: "fail",
        info: "failed to remove element"
      });
    }
  );
});

export default router;
