import bcrypt from 'bcrypt';
import  connectionDB  from '../database/db.js';

export async function signUp(req,res,next){
    const {username, email, password} = res.locals.signup;
    const encryptedPassword = bcrypt.hashSync(password, 10);

    try{
        await connectionDB.query("INSERT INTO users(username, email, password) VALUES($1, $2, $3)",[username, email, encryptedPassword]);

        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err.message);
    }
}