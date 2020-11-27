import { Request } from 'express';

const imageFilter = function (_req: Request, file: Express.Multer.File, callback: any) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|MP4)$/))
    return callback(new Error('Only media files are allowed!'), false);
  callback(null, true);
};

export default imageFilter;
