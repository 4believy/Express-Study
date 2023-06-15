import express, { response } from 'express';

export const controllerWrapper = (requestHandler: any) => {
  return async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    try {
      await requestHandler(request, response, next);
    } catch (error) {
      next(error);
    }
  };
};
