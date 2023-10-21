import { Context } from 'koa';
import jwt from 'jsonwebtoken';
import User from '../models/User.ts'
import { IUser } from '../types/index.ts';
import config from '../config.ts';

export async function register(ctx: Context): Promise<void> {
  try {
    const { 
      username,
      email,
      password
    } = ctx.request.body as { 
      username: string;
      email: string;
      password: string 
    };

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      ctx.status = 400;
      ctx.body = { error: 'Username or email already in use' };
      return;
    }

    const newUser: IUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    ctx.status = 201;
    ctx.body = { message: 'User registered successfully' /*, token */ };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
    console.error('Error in registerController:', error);
  }
}

export async function login(ctx: Context): Promise<void> {
  try { 
    const { 
      username,
      password
    } = ctx.request.body as { 
      username: string;
      email: string;
      password: string 
    };
    const existingUser = await User.findOne({ $or: [{ username: username.toLowerCase() }] })
    const correctPassword = existingUser && await existingUser.comparePassword(password, existingUser.password);
    console.log('correctPassword:', correctPassword)
    if (correctPassword) {
      const token = jwt.sign({
        _id: existingUser?._id,
        user: existingUser
      }, config.jwtSecret);
      ctx.status = 201;
      ctx.body = {
        message: 'User login successfully',
        token,
        user: existingUser
      };
    } else {
      ctx.body = {
        message: 'User login unsuccessfully',
      };
    }
  
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
    console.error('Error in registerController:', error);
  }
}
