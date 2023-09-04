import Koa, { DefaultState, DefaultContext } from 'koa';

export interface CustomKoaApplication extends Koa<DefaultState, DefaultContext> {
  [key: string]: any;
}