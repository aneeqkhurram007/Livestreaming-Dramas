const express = require("express");

const router = express.Router();

const BlogPost = require("../models/model");

router.get("/", async (req, res) => {
  BlogPost.find({})
    .then((data) => {
      //binding obj
      console.log("data:", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
  // res.json(data);
});

router.post("/save", (req, res) => {
  BlogPost.create(req.body);
  res.json({
    msg: "We recieved Your data!!",
  });
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  BlogPost.findOne({ email }, (err, user) => {
    if (err) console.log("Error Found");
    if (user) {
      if (user.password == password) {
        console.log(user);
        res.json({
          message: "Login Successful",
        });
      } else {
        res.json({
          message: "Invalid Credentials",
        });
      }
    }
  });
});
router.get("/name", (req, res) => {
  // ye to static data hai :) hn ik bss yeh bata rhi yeh chl rha :D
  const data = {
    username: "Arham",
    age: 8,
  };
  res.json(data);
});
module.exports = router;
