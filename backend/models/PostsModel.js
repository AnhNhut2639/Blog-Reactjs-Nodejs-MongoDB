const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const postSchema = mongoose.Schema({
  idPost: {
    type: String,
    default: uuidv4,
    require: true,
  },
  idUser: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
    require: true,
  },
  datePosted: {
    type: Date,
    default: Date.now(),
  },
  likeCounts: {
    type: Number,
    default: 0,
  },
  wherePosted: {
    type: String,
  },
  likeList: [
    {
      idLiker: {
        type: String,
      },
      usernameLiker: {
        type: String,
      },
    },
  ],
});

const posts = mongoose.model("posts", postSchema);
module.exports = posts;
