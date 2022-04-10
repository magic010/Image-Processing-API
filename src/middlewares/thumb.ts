import { Request, Response, NextFunction } from 'express';
import fs, { promises as fsPromises } from 'fs';

const thumbDirectory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const thumbDirExist = fs.existsSync('./assets/thumbs');

  if (!thumbDirExist) {
    await fsPromises.mkdir('.assets/thumbs');
  }

  next();
};

export { thumbDirectory };