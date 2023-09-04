import mongoose, { Schema, Model } from 'mongoose'
import { IUser } from '../types';

const userSchema: Schema = new mongoose.Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;