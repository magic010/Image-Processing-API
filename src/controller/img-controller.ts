import sharp from 'sharp';
import { Request, Response } from 'express';
import { ImgPath, ImgThumbPath } from '../paths';

export const resizeImg = async (
  filename: string,
  width: number,
  height: number,
): Promise<sharp.OutputInfo> => sharp(ImgPath(String(filename)))
  .resize(width, height)
  .toFile(`.assets/thumbs/${filename}-thumb(${width}x${height}).jpg`);

export const imgController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { filename, width, height } = req.query;
  await resizeImg(String(filename), Number(width), Number(height));

  res
    .status(200)
    .sendFile(ImgThumbPath(`${filename}-thumb(${width}x${height}).jpg`));
};
