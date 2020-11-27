import ejs from 'ejs';
import express, { Application, NextFunction, Request, Response } from 'express';
import basicAuth from 'express-basic-auth';
import path from 'path';

import { GET, POST } from '.';

// -----------------//
//    Basic Auth    //
//------------------//
const auth = basicAuth({
  users: { super: '$lolcat1234', temp1: '(V8VL@^`58xLPpCv' },
  challenge: true,
});

const page404 = (_req: Request, res: Response, _next: NextFunction) => {
  res.render('index.html');
};

const routes = (app: Application) => {
  // Endpoints
  app.use('/api/v2', GET);
  app.use('/api/v2', POST);

  // Set view and render engine for 404 page
  app.set('views', __dirname + '/views/default');
  app.engine('html', ejs.renderFile);
  app.set('view engine', 'html');

  // Initial path
  app.get('/', page404);

  // Serve Views
  app.use(auth, express.static(path.join(__dirname, 'views/dashboard')));
  app.get('/dashboard', auth, (_req, res) => {
    res.sendFile(path.join(__dirname, 'views/dashboard', 'index.html'));
  });

  // Show 404 on all other parths
  app.get('*', page404);
};

export { routes };
