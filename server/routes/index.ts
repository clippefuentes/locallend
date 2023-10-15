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
  
  router.use((_ctx, next) => {
    console.log('call before')
    next();
  });
  router.all('/api/test', (ctx) => {
    console.log('test')
    ctx.status = 200;
    ctx.body = {
      message: 'awrsp,e',
    };
  });
}