import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
