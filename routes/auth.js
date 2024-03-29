const express = require("express");
const authUsers = require("../middlewares/authUsers");
const router = express.Router();

router.post("/", authUsers);

module.exports = router;
