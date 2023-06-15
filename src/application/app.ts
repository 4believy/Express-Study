import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware';
import StudentsRouter from '../students/students.router';
import bodyParser from 'body-parser';
import exceptionsFilter from './middlewares/exceptions.filter';
import path from 'path';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

const StaticFilePath = path.join(__dirname, '../', 'public');

app.use('/api/v1/public', express.static(StaticFilePath));
app.use('/api/v1/students', StudentsRouter);

app.use(exceptionsFilter);

export default app;
