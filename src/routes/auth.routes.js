import {Router} from 'express';
import { signUp } from '../controllers/auth.js';
import { validateSchemaUser } from '../middlewares/signup.middleware.js';

const authRoutes = Router();
authRoutes.post("/signup",validateSchemaUser, signUp)

export default authRoutes;