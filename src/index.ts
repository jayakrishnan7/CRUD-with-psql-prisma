import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import express from 'express';
import { router } from './routes/router';

// env configuration.............
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();

const PORT = 4001;

//parse json bodies...........
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);


app.listen(PORT, (): void => {
    console.log(`Server is running on ${PORT}`);
})
