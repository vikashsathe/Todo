const { name } = require("ejs");
const mongoose = require("mongoose");
const user = require("./user");

mongoose.connect("mongodb://127.0.0.1:27017/TaskApp");

const postSchema = mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }]
});

module.exports = mongoose.model("post", postSchema);
