const express = require("express");
const {
  getOrdinateurs,
  createOrdinateur,
} = require("../controllers/ordinateur");
const router = express.Router();

router.get("/", getOrdinateurs).post("/", createOrdinateur);

module.exports = router;
