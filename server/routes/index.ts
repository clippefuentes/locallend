import Router from 'koa-router';
import {
  registerController
} from '../controllers/User.ts';
// import User from '../models/User.ts'
// import { IUser } from '../types';

export default (router: Router) => {
  router.post('/api/register', registerController);
}