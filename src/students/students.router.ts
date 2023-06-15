import { Router } from 'express';
import * as StudentsController from './students.controller';
import { controllerWrapper } from '../application/utilities/controller-wrapper';
import validator from '../application/middlewares/validation.middleware';
import { studentCreateSchema, studentUpdateSchema } from './student.schema';
import { idParamsSchema } from '../application/schemas/id-param.schema';

const router = Router();

router.get('/', controllerWrapper(StudentsController.getAllStudents));

router.get(
  '/:id',
  validator.params(idParamsSchema),
  controllerWrapper(StudentsController.getStudentById),
);

router.post(
  '/',
  validator.body(studentCreateSchema),
  controllerWrapper(StudentsController.createStudent),
);

router.patch(
  '/:id',
  validator.params(idParamsSchema),
  validator.body(studentUpdateSchema),
  controllerWrapper(StudentsController.updateStudentById),
);

router.delete(
  '/:id',
  validator.params(idParamsSchema),
  controllerWrapper(StudentsController.deleteStudentById),
);

export default router;
