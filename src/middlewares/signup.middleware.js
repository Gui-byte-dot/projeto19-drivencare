import connectionDB from "../database/db.js";
import { userSchema } from "../models/users.models.js";

export async function validateSchemaUser(req,res,next){
    const signup = req.body;
    const {error} = userSchema.validate(req.body, {abortEarly: false});
    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send({errors});
    }
    const emailExists = await connectionDB.query("SELECT * FROM users WHERE email=$1",[signup.email]);
    if(emailExists.rowCount !== 0){
        return res.status(409).send("Email já existe");
    }
    res.locals.signup = signup;
    next();
}