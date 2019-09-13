import createError from "http-errors";
import express from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
import morgan from "morgan";
import indexRouter from "./routes/index";
import personRouter from "./routes/personRouter";
import fs from "fs";

const app = express();

// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "pug");

const data = fs.readFileSync("./db.json");
export const db = JSON.parse(data);
const loggingsyntax=':method :status :url :res'

morgan.token("requestBody",(req, res, param)=>{return JSON.stringify(req.body)})


app.use(morgan(":method :status :url :requestBody"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static(join(__dirname, "public")));



app.use("/", indexRouter);
app.use("/api", personRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
