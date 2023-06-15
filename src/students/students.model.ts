import { IStudent } from './types/student.interface';
import ObjectID from 'bson-objectid';

const students: IStudent[] = [
  {
    id: ObjectID().toHexString(),
    name: 'Student1_name',
    surname: 'Student1_surname',
    age: 21,
    email: 'st1@gmail.com',
  },
  {
    id: ObjectID().toHexString(),
    name: 'Student2_name',
    surname: 'Student2_surname',
    age: 32,
    email: 'st2@gmail.com',
  },
  // {
  //   id:ObjectID().toHexString(),
  //   name:"Student_name",
  //   surname:"Student_surname",
  //   age:,
  //   email:"st@gmail.com",
  // },
];

export const getAllStudents = (): IStudent[] => {
  return students;
};

export const getStudentById = (studentId: string): IStudent | undefined => {
  return students.find(({ id }) => id === studentId);
};

export const getStudentByEmail = (studentEmail: string): IStudent | undefined => {
  return students.find(({ email }) => email === studentEmail);
};

export const createStudent = (createStudentSchema: Omit<IStudent, 'id'>): IStudent => {
  const newStudent = {
    ...createStudentSchema,
    id: ObjectID().toHexString(),
  };
  students.push(newStudent);

  return newStudent;
};

export const UpdateStudentById = (
  studentId: string,
  UpdateStudentSchema: Partial<IStudent>,
): IStudent | undefined => {
  const studentIndex = students.findIndex(({ id }) => id === studentId);
  const student = students[studentIndex];

  if (!student) {
    return;
  }

  const updatedStudent = {
    ...student,
    ...UpdateStudentSchema,
  };

  students.splice(studentIndex, 1, updatedStudent);

  return updatedStudent;
};

export const deleteStudentById = (studentId: string): IStudent | undefined => {
  const studentIndex = students.findIndex(({ id }) => id === studentId);
  const student = students[studentIndex];

  if (!student) {
    return;
  }

  students.splice(studentIndex, 1);

  return student;
};
