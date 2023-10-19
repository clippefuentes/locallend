import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import mongoose from 'mongoose';

import { CustomKoaApplication } from './types/App';

import routes from './routes/index.ts'

const app = new Koa() as CustomKoaApplication;
const router = new Router();


app.use(serve(path.resolve('../dist')));

app.db = mongoose.connect('mongodb://127.0.0.1:27017/locallend');

router.get('/api', (ctx) => {
  ctx.body = 'Hello World from API!';
});

routes(router);

app
  .use(cors())
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});