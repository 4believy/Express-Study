import express, { NextFunction } from 'express';
import * as StudentsService from './students.service';
import { IStudentUpdateRequest } from './types/student-update-request.interface';
import { ValidatedRequest, ContainerTypes } from 'express-joi-validation';
import { IStudentCreateRequest } from './types/student-create-request.interface';
import multer from 'multer';

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
) => {
  const { id } = request.params;
  const student = StudentsService.updateStudentById(id, request.body);
  response.json(student);
};

export const addImage = (
  request: express.Request<{ id: string; file: Express.Multer.File }>,
  response: express.Response,
) => {
  const { id } = request.params;
  const { path } = request.file ?? {};
  const student = StudentsService.addImage(id, path);
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
