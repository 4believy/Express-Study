import express from 'express';
import * as StudentsService from './students.service';

export const getAllStudents = (request: express.Request, response: express.Response) => {
  const students = StudentsService.getAllStudents();
  response.json(students);
};
