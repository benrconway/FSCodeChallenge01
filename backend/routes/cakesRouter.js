const express = require("express");
const cakesData = require("../data/cakes");
const router = express.Router();

router.get("/", function (req, res) {
  res.send(cakesData);
});

router.get("/:id", function (req, res) {
  const suppliedId = Number(req.params.id);
  if (isNaN(suppliedId)) {
    res.status(400).send("Sorry, something went terribly wrong");
  }
  const selectedCake = cakesData.find((cake) => cake.id === suppliedId);
  res.send(selectedCake);
});

router.post("/", function (req, res) {
  res.status(201).send(req.body);
});

router.put("/:id", function (req, res) {
  const suppliedId = Number(req.params.id);
  if (isNaN(suppliedId)) {
    res.status(400).send("Sorry, something went terribly wrong");
  }
  res.status(200).send(req.body);
});

router.delete("/:id", function (req, res) {
  const suppliedId = Number(req.params.id);
  if (isNaN(suppliedId)) {
    res.status(400).send("Sorry, something went terribly wrong");
  }
  res.status(204).send();
});

module.exports = router;
