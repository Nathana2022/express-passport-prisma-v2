const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require('bcrypt')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const usersRouter = require("./routes/users");
const ordinateursRouter = require("./routes/ordinateurs");
const prisma = require("./db/prisma");


dotenv.config();

//configuration de Strategie Locale
const confingPassport = new LocalStrategy({usernameField : 'email', passwordField:'password'}, async (email, password, done)=>{
  const user = await prisma.user.findFirst({where:{email}})
  if(!user){return done(null, false, {message:'Cet utilisateur ne se trouve pas dans notre système'})}
   bcrypt.compare(password, user.password, (error, ismatch)=>{
    if (error){return done(error)}
   })
   if(!ismatch){return done(null, false, {message: 'le mot de passe est incorrect'})}
   return done(null, user)
});

//configuration de passport
passport.use(confingPassport);
passport.serializeUser((user, done) => {
  done(null, user.id)
});
passport.deserializeUser((user, done) => {
  done(null, user)
});
server.use(passport.initialize())

const PORT = process.env.PORT || 3002;
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("DEV WEB C3");
});
server.use("/users", usersRouter);
server.use("/ordinateurs", ordinateursRouter);

server.listen(PORT, () => console.log(`Le serveur est lancé sur ${PORT}`));
