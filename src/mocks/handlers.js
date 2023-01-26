import { rest } from 'msw';
// import { API_ROOT } from '../common/config/config';

import loginData from './data/login-data.json';

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),
  // Handles a GET /user request
  rest.get('/api/auth', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(loginData),
  )),
];
