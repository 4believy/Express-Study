import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middlewares';
import StudentsRouter from '../students/students.router';

const app = express();

app.use(cors());
app.use(logger);

app.use('/api/v1/students', StudentsRouter);

export default app;
