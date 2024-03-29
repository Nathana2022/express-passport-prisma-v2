const passport = require('passport');
const jwt = require('jsonwebtoken');


function authUsers(req, res, next){
    passport.authenticate('local', (error, user, infos)=>{
        return res.status(500).json({message : 'erreur'})
        if(!user){res.status(401).json({message : 'les identifiants saisies ne sont pas corrects'})}
    })
    //Recuperation de variable d'environnement
    const token = jwt.sign({id:user.id, role:user.role}, process.env.JWT_SECRET, {expiresIn:Date.now() +3*60*1000})
    res.status(200).json({token})
}

module.exports = authUsers;
