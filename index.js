const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;
const server = express();

server.get("/", (req, res) => {
  res.send("DEV WEB C3");
});

server.listen(PORT, () => console.log(`Le serveur est lancé sur ${PORT}`));
