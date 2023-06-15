import express from 'express';
import app from '../app';
import { error } from 'console';
import HttpException from '../exeptions/http-exception';
import { HttpStatuses } from '../enums/http-statuses.enum';

const exceptionsFilter = (
  error: HttpException,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
) => {
  const status = error.status || HttpStatuses.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Something went wrong';
  response.status(status).send({ status, message });
  next();
};

export default exceptionsFilter;
