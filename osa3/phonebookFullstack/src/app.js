require('dotenv').config()
import { createError } from "http-json-errors"
import express from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
import morgan from "morgan";
import indexRouter from "./routes/index";
import personRouter from "./routes/personRouter";
import  path from "path";
import cors from "cors"
import mongoose from "mongoose"
const app = express();

// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "pug");

const URL = `${process.env.DATABASECONNECTION}/phonebook`;

export const connection =mongoose.connect(URL, {useNewUrlParser: true}).then(result => {
  console.log('connected to MongoDB');
})
.catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
});

morgan.token("requestBody",(req, res, param)=>{return JSON.stringify(req.body)})

app.use(cors())
app.use(morgan(":method :status :url :requestBody"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.static("public"));

app.use("/apiInfo", indexRouter);
app.use("/api", personRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  throw next(createError(404));
});

console.log(process.env.NODE_ENV)

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

if (process.env.NODE_ENV === 'production') {
  // app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req,res) => {
    res.sendFile(path.resolve( 'public'))
  })
  console.log("test")
}

export default app;