import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import mongoose from 'mongoose';

const app = new Koa();
const router = new Router();

// Serve static files
app.use(serve(path.resolve('../dist')));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/locallend', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// Define routes
router.get('/api', (ctx, next) => {
  ctx.body = 'Hello World from API!';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});