const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const userSchema = mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      require: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    desciption: {
      type: String,
      // require:true
    },
    avatar: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    dateCreated: {
      type: Date,
      default: Date.now(),
      require: true,
    },
    lock: {
      type: Boolean,
      default: false,
    },
    followers: [
      {
        idFollower: {
          type: String,
        },
        usernameFollower: {
          type: String,
        },
        dateFollower: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    following: [
      {
        idFollowing: {
          type: String,
        },
        usernameFollowing: {
          type: String,
        },
        dateFollowing: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    listLikes: [
      {
        idPost: {
          type: String,
        },
      },
    ],
  },
  { versionKey: false }
);
userSchema.pre("save", function (next) {
  var user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        user.updated_at = Date.now();
        return next();
      });
    });
  } else {
    if (user.username) {
      user.username = user.username.toLowerCase();
    }
    return next();
  }
});
userSchema.methods.comparePassword = function (password) {
  try {
    return bcrypt.compare(password, this.password);
  } catch (err) {
    return err;
  }
};

const users = mongoose.model("users", userSchema);
module.exports = users;
