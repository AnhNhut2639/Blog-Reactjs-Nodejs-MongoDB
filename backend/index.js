require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const routers = require("./routers");
// const auth = require("./api/Login");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
console.log(process.env.MONGO_URL);
// app.use("/", (req, res) => {
//   res.send("Hello co cos");
// });
app.use(function (req, res, next) {
  //to allow cross domain requests to send cookie information.
  res.header("Access-Control-Allow-Credentials", true);

  // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
  res.header("Access-Control-Allow-Origin", req.headers.origin);

  // list of methods that are supported by the server
  res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");

  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN"
  );

  next();
});
app.use("/login", routers.login);
app.use("/user", routers.user);

// app.get("/login", auth);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
