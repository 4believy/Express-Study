import { Router } from 'express';
import * as StudentsController from './students.controller';

const router = Router();

router.get('/', StudentsController.getAllStudents);

export default router;
