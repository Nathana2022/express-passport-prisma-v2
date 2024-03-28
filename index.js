const express = require("express");
const dotenv = require("dotenv");
const usersRouter = require("./routes/users");
const ordinateursRouter = require("./routes/ordinateurs");

dotenv.config();
const PORT = process.env.PORT;
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("DEV WEB C3");
});
server.use("/users", usersRouter);
server.use("/ordinateurs", ordinateursRouter);

server.listen(PORT, () => console.log(`Le serveur est lancé sur ${PORT}`));
