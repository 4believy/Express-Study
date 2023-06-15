import express, { NextFunction } from 'express';
import * as StudentsService from './students.service';
import { IStudentUpdateRequest } from './types/student-update-request.interface';
import { ValidatedRequest, ContainerTypes } from 'express-joi-validation';
import { IStudentCreateRequest } from './types/student-create-request.interface';

export const getAllStudents = (request: express.Request, response: express.Response) => {
  const students = StudentsService.getAllStudents();
  response.json(students);
};

export const getStudentById = (
  request: express.Request<{ id: string }>,
  response: express.Response,
) => {
  const { id } = request.params;
  const students = StudentsService.getStudentById(id);
  response.json(students);
};

export const createStudent = (
  request: ValidatedRequest<IStudentCreateRequest>,
  response: express.Response,
) => {
  const student = StudentsService.createStudent(request.body);
  response.json(student);
};

export const updateStudentById = (
  request: ValidatedRequest<IStudentUpdateRequest>,
  response: express.Response,
  next: NextFunction,
) => {
  const { id } = request.params;
  const student = StudentsService.updateStudentById(id, request.body);
  response.json(student);
};

export const deleteStudentById = (
  request: express.Request<{ id: string }>,
  response: express.Response,
) => {
  const { id } = request.params;
  const student = StudentsService.deleteStudentById(id);
  response.json(student);
};
