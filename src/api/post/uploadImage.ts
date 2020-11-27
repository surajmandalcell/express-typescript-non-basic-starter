import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';

import query from './../../models/image';
import s3, { constants } from './../../services/aws';
import imageFilter from './../../utility/image_filter';
import { missingFields } from './../../utility/responses';

export async function uploadImage(req: Request, res: Response, next: NextFunction) {
  let pathName: string;
  const query: query = {
    id: req?.query?.id,
    type: req?.query?.type,
  };
  // log
  console.log(query);
  // Check if querytype exists
  if (!query.id) return next(missingFields);
  if (!query.type) return next(missingFields);

  // Init multer
  const upload = multer({
    storage: multerS3({
      s3: s3,
      acl: 'public-read',
      bucket: constants.BUCKET_NAME!,
      metadata: function (_req, file, callback) {
        callback(null, { fieldName: file.fieldname });
      },
      key: function (_req, file, callback) {
        pathName = folderName(query) + fileName(file);
        console.log(pathName);
        callback(null, pathName);
      },
    }),
    fileFilter: imageFilter,
  }).single('image');

  await upload(req, res, (err: any) => {
    console.log(err);
    // writeFile(res);
    if (!req.file) return res.send('Please select an image to upload');
    else if (err instanceof multer.MulterError) return res.send(err);
    else if (err) return res.status(500).send(err);

    return res.status(200).json({
      success: 1,
      message: 'Uploaded Successfully',
      after: {
        url: constants.BASE_URL + pathName,
      },
    });
  });

  return;
}

const fileName = (file: Express.Multer.File) => {
  return Date.now() + path.extname(file.originalname);
};

const folderName = (query: query) => {
  let path = '';
  const sep = '/';
  path += query.type + sep;
  path += query.id + sep;
  return path;
};
