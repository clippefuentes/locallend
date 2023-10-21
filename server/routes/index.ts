import Router from 'koa-router';
import jwt from 'jsonwebtoken'
import {
  register,
  login,
} from '../controllers/Auth.ts';
import config from '../config.ts';
// import User from '../models/User.ts'
// import { IUser } from '../types';

export default (router: Router) => {
  router.post('/api/register', register);
  router.post('/api/login', login);

  router.use(jwtMiddleware);
  
  router.use((_ctx, next) => {
    console.log('call before')
    next();
  });

  router.get('/api/user', (ctx) => {
    console.log('ctx.state.user', ctx.state.user)
    ctx.status = 201;
    ctx.body = {
      user: ctx.state.user
    }
  });
  router.all('/api/test', (ctx) => {
    if (ctx.state.user) {
      console.log('test');
      ctx.status = 200;
      ctx.body = {
        message: 'User Test API Auth',
      };
    } else {
      ctx.status = 401;
      ctx.body = { error: 'Unauthorized' };
    }
  });
}

async function jwtMiddleware(ctx: any, next: any) {
  const tokenHeader = ctx.request.headers.authorization;
  console.log('tokenHeader:', tokenHeader)
  if (!tokenHeader) {
    ctx.status = 401;
    ctx.body = { error: 'Unauthorized' };
    return;
  }

  const token = tokenHeader.split(' ')[1]; // Extract the token without 'Bearer'
  console.log('token:', token)
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    ctx.state.user = decoded;
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = { error: 'Unauthorized' };
  }
}