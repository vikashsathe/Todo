const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/TaskApp");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  profilepic: {
    type: String,
    default: "default_profile.png"
  },
  posts: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }
  ]
});

module.exports = mongoose.model("user", userSchema);
