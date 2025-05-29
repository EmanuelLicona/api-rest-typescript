
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { itemRouter } from './routes/item';


const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());

app.use(itemRouter);


app.listen(PORT, () => console.log('Server is running on http://localhost:' + PORT));