import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exeptions/http-exception';
import * as StudentsModel from './students.model';
import { IStudent } from './types/student.interface';
// getAllStudents
// getStudentById
// getStudentByEmail
// createStudent
// UpdateStudentById
// deleteStudentById

export const getAllStudents = () => {
  return StudentsModel.getAllStudents();
};

export const getStudentById = (id: string) => {
  const student = StudentsModel.getStudentById(id);

  if (!student) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }
  return student;
};

// export const getStudentById = (id: string) => {
//   return StudentsModel.getStudentById(id);
// };

export const getStudentByEmail = (email: string) => {
  return StudentsModel.getStudentByEmail(email);
};

export const createStudent = (createStudentSchema: Omit<IStudent, 'id'>) => {
  return StudentsModel.createStudent(createStudentSchema);
};

export const updateStudentById = (id: string, UpdateStudentSchema: Partial<IStudent>) => {
  return StudentsModel.updateStudentById(id, UpdateStudentSchema);
};

export const deleteStudentById = (id: string) => {
  return StudentsModel.deleteStudentById(id);
};
