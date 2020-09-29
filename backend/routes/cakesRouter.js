const express = require("express");
const {
  getOneById,
  getAll,
  saveOne,
} = require("../helpers/mongodbHelper/mongodbHelper");

const router = express.Router();

router.get("/", function (req, res) {
  getAll(function (cakes) {
    res.send(cakes);
  });
});

router.get("/:id", function (req, res) {
  const suppliedId = Number(req.params.id);
  if (isNaN(suppliedId)) {
    res.sendStatus(400);
  }
  getOneById(suppliedId, function (cake) {
    if (cake === undefined) {
      res.sendStatus(404);
    }
    res.send(cake);
  });
});

router.post("/", function (req, res) {
  const newCake = req.body;
  newCake.id = Number(req.body.id);
  newCake.yumFactor = Number(req.body.yumFactor);
  saveOne(newCake, function (cake) {
    res.send(cake);
  });
});

router.put("/:id", function (req, res) {
  const suppliedId = Number(req.params.id);
  if (isNaN(suppliedId)) {
    res.sendStatus(400);
  }
  res.status(200).send(req.body);
});

router.delete("/:id", function (req, res) {
  const suppliedId = Number(req.params.id);
  if (isNaN(suppliedId)) {
    res.sendStatus(400);
  }
  res.status(204).send();
});

module.exports = router;
