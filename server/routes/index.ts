import Router from 'koa-router';
import {
  register,
  login,
} from '../controllers/User.ts';
// import User from '../models/User.ts'
// import { IUser } from '../types';

export default (router: Router) => {
  router.post('/api/register', register);
  router.post('/api/login', login);
}