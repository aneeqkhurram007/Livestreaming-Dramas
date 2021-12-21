const mongoose = require("mongoose");
//schema
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  gender: String,
  currency: String,
});
const BlogPost = mongoose.model("BlogPost", BlogSchema);
module.exports = BlogPost;
