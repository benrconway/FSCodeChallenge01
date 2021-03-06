require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cakesRouter = require("./routes/cakesRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/cakes", cakesRouter);

app.get("/", function (req, res) {
  res.redirect("http://localhost:3000");
});

app.listen(process.env.PORT || 3010, function () {
  console.log("Backend running");
});
