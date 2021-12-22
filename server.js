const express = require("express");
const mongose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 7800;

const routes = require("./routes/api");
// const MONGODB_URI='mongodb+srv://ayesha:FatimaA2@cluster.oah8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//http request logger means what route we are hitting
//the 1st one is coonection is going to be in your server or anywhere in world
//2 is option you can pass
console.clear();
mongose.connect("mongodb://localhost:27017/SemesterProject");
//if succesful otherwise no printed
mongose.connection.on("connected", () => {
  console.log("Mongose is connected");
});

//making all thereq cming in as json and make them available in req.body

//middle ware being hooked in express
app.use(express.json());
//extended means how deep you want to go to that object
//we have simple object so make it false
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use("/api", routes);
app.listen(PORT, console.log(`server is starting at ${PORT}`));
