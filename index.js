const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 3000;


//adding middleware
app.use(express.json());



const connectWithDb = require("./config/database");
const userRouter = require("./routes/test");
connectWithDb();

app.use("/users", userRouter);


//get request
app.get("/", (req,res) => {
      res.send(`<h1>This is Heading anupam is here</h1>`)
  })



  app.listen(PORT ,() => {
      console.log("App started");
  })