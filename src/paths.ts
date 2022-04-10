import path from 'path';

export const ImgPath = (imageName: string) => path.join(__dirname, '..', 'assets', 'images', `${imageName}.jpg`);

export const ImgThumbPath = (imageName: string) => path.join(__dirname, '..', 'assets', 'thumbs', `${imageName}`);
