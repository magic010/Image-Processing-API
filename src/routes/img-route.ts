import express from 'express';
import missingFile from '../middlewares/missing-file';
import validationImage from '../middlewares/check-thumb-exists';
import notFoundImg from '../middlewares/not-found';
import { imgController } from '../controller/img-controller';

const imgRoute = express.Router();

imgRoute.get(
  '/images',
  [missingFile, validationImage, notFoundImg],
  imgController
);
export default  imgRoute ;

