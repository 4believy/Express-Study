import express from 'express';
import app from '../app';

const logger = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
) => {
  const { url, method } = request;
  console.log(`----- ${method} ${url}`);
  next();
};

export default logger;
