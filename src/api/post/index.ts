import express from 'express';

import { checkAuth } from '../middlewares';
import { uploadImage } from './uploadImage';

const router = express.Router();

// Common
router.post('/util/uploadImage', checkAuth, uploadImage);
// router.post('/dummypost', checkAuth, dummyPost);

export default router;
