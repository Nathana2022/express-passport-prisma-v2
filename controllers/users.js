const bcrypt = require("bcrypt");
const prisma = require("../db/prisma");

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
  }
};

const registerUser = async (req, res) => {
  const passwordHashed = bcrypt.hashSync(req.body.password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: passwordHashed,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(passwordHashed);
  }
};

module.exports = {
  getUsers,
  registerUser,
};
