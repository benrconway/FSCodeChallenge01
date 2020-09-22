const express = require("express");
const cakesData = require("../data/cakes");
const router = express.Router();

router.get("/", function (req, res) {
  res.send(cakesData);
});

router.get("/:id", function (req, res) {
  const selectedCake = cakesData.find((cake) => cake.id === req.params.id);
  res.send(selectedCake);
});

module.exports = router;
