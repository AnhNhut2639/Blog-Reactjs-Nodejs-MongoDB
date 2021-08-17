const express = require("express");
const app = express();

const port = 3001;
const routers = require("./routers");
// const auth = require("./api/Login");
app.use("/", (req, res) => {
  res.send("Hello co co");
});
app.use("/login", routers.login);

// app.get("/login", auth);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
