import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';
import { ImgThumbPath } from '../paths';

const validationImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { filename, width, height } = req.query;

  const existingImage = fs.existsSync(
    ImgThumbPath(`${filename}-thumb(${width}x${height}).jpg`),
  );

  if (existingImage) {
    return res
      .status(200)
      .sendFile(ImgThumbPath(`${filename}-thumb(${width}x${height}).jpg`));
  }

 next();
};
export default  validationImage ;
