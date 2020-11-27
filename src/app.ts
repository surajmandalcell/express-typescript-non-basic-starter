import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import logger from 'morgan';

import { routes } from './routes';
import error from './utility/express/error';
import { log } from './utility/express/log';

// Init
dotenv.config({
  // Change this to .env when in production mode
  path: './src/config/.env.dev',
});
const app: Application = express();
// Use Stuff
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(log.morgan);
app.use(logger('dev'));

// Pass app to handle routes
routes(app);

// Custom error handler
app.use(error);

// Declarations
const port = process.env.PORT || 4000;

// Start server
const server = app.listen(port);
server.setTimeout(10000);
console.log(`Listening on port ${port}`);
