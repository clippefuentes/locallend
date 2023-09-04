import Router from 'koa-router';
// import User from '../models/User.ts'
// import { IUser } from '../types';

export default (router: Router) => {
  router.post('/api/create_user', async (ctx) => {
    try {
      // Create a new user
      console.log(ctx.request.body)
      // const newUser: IUser = new User({
      //   username: 'john_doe',
      //   email: 'john.doe@example.com',
      //   password: 'securepassword'
      // });
  
      // Save the user to the database
      // const savedUser = await newUser.save();
  
      // Send a success response
      ctx.status = 201;
      ctx.body = {
        message: 'User created successfully',
        // user: savedUser
      };
    } catch (err) {
      console.error('Error:', err);
      
      // Send an error response
      ctx.status = 500;
      ctx.body = {
        message: 'An error occurred while creating the user'
      };
    }
  });
}