const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const commentSchema = mongoose.Schema({
  idComment: {
    type: String,
    default: uuidv4,
    require: true,
  },
  idUser: {
    type: String,
  },
  idPost: {
    type: String,
  },
  dateComment: {
    type: Date,
    default: Date.now(),
  },
  content: {
    type: String,
  },
});

const comments = mongoose.model("comments", commentSchema);
module.exports = comments;
