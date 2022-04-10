import { Request, Response, NextFunction } from 'express';

const missingFile = (req: Request, res: Response, next: NextFunction) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string, 10);
  const height = parseInt(req.query.height as string, 10);

  if (!filename || !width || !height) {
    return res.status(400).send({ error: 'file entered incorrect' });
  }
  return next();
};
export default  missingFile ;
