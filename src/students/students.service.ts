import ObjectID from 'bson-objectid';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exeptions/http-exception';
import * as StudentsModel from './students.model';
import { IStudent } from './types/student.interface';
import path from 'path';
import fs from 'fs/promises';
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

export const addImage = async (id: string, filePath?: string) => {
  if (!filePath) {
    throw new HttpException(HttpStatuses.BAD_REQUEST, 'File is not provided');
  }
  try {
    const imageId = ObjectID().toHexString();
    const imageExtension = path.extname(filePath);
    const imageName = imageId + imageExtension;

    const studentsDirectoryName = 'students';
    const studentsDirectoryPath = path.join(__dirname, '../', 'public', studentsDirectoryName);
    const newImagePath = path.join(studentsDirectoryPath, imageName);
    const imagePath = `${studentsDirectoryName}/${imageName}`;

    await fs.rename(filePath, newImagePath);

    const updatedStudent = updateStudentById(id, { imagePath });

    return updatedStudent;
  } catch (error) {
    await fs.unlink;
    throw error;
  }
};

export const deleteStudentById = (id: string) => {
  return StudentsModel.deleteStudentById(id);
};
