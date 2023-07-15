const express = require("express");
// const mongoose = require("mongoose");
const { signup } = require("../controllers/usercontrollers");
const userRouter = express.Router();

userRouter.post("/signup", signup);

module.exports = userRouter;