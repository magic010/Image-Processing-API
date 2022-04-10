import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { ImgPath } from '../paths';

const notFoundImg = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const existingImg = fs.existsSync(ImgPath(String(req.query.filename)));
  if (!existingImg) {
    res
      .status(404)
      .send({ status: 404, message: 'Image Not Found', success: false });
  }

  next();
};

export default  notFoundImg ;
