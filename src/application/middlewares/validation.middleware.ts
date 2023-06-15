import express from 'express';
import app from '../app';
import { createValidator } from 'express-joi-validation';

const validator = createValidator();

export default validator;
