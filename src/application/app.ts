import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware';
import StudentsRouter from '../students/students.router';
import bodyParser from 'body-parser';
import exceptionsFilter from './middlewares/exceptions.filter';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

app.use('/api/v1/students', StudentsRouter);

app.use(exceptionsFilter);

export default app;
