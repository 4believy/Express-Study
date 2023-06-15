import { ValidatedRequestSchema, ContainerTypes } from 'express-joi-validation';
import { IStudent } from './student.interface';

export interface IStudentUpdateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Partial<IStudent>;
}
