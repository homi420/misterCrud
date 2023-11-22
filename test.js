const express = require("express");
const usersModel = require("./usersModel");
const studentModel = require("./studentModel");
const classModel = require("./classes");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const crud = require("./index");
const JWT_SECRET = "124acg4ybd589c87y435ijkfg98y45jhd9f83y45";
app.use(express.json());
const mongoUrl = "mongodb://127.0.0.1:27017/misterCrud";
const connectToMongo = () => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongoose Connected!");
    })
    .catch((error) => {
      console.log("Connection Failed", error);
    });
};
connectToMongo();
app.use("/uploads", express.static("./uploads"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.htm"));
});
app.post("/signUp", (req, res) => {
  crud.signUp(req, usersModel);
});
app.post("/login", (req, res) => {
  crud.login(req, usersModel, JWT_SECRET);
});
app.get("/getUser", (req, res) => {
  crud.fetch(req, JWT_SECRET);
  crud.getUser(req, usersModel);
});

app.post("/addClass", async (req, res) => {
  let resp = await crud.createItem(req, classModel);
});
app.post("/addStudent", async (req, res) => {
  let resp = await crud.createItem(req, studentModel);
  console.log(resp);
  res.json(resp);
});
app.post("/addClass", async (req, res) => {
  let resp = await crud.deleteItem(req, classModel);
  res.json(resp);
});
app.get("/getClass", (req, res) => {
  crud.getItems(classModel);
});
app.delete("/deleteStudent/:id", async (req, res) => {
  let resp = await crud.deleteItem(req, studentModel);
  res.json(resp);
});
app.delete("/deleteClass/:id", async (req, res) => {
  let resp = await crud.deleteItem(req, classModel);
  res.json(resp);
});
app.get("/getStudents", async (req, res) => {
  const resp = await crud.getItems(studentModel, ["class"]);
  res.json(resp);
});
app.get("/getStudent/:id", (req, res) => {
  crud.getItem(req, studentModel, ["class"]);
});
app.listen(80);
