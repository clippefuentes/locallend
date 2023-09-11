import mongoose, { Schema, Model } from 'mongoose'
import bcrypt from 'bcryptjs';
import { IUser } from '../types';

const userSchema: Schema = new mongoose.Schema<IUser>(
  {
    username: { 
      type: String, required: true, unique: true
    },
    email: { 
      type: String, required: true, unique: true
    },
    password: { 
      type: String, required: true
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

userSchema.pre('save',  async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    // @ts-ignore
    next(error);
  }
})

userSchema.methods.comparePassword = async function (candidatePassword: string, password: string) {
  try {
    return await bcrypt.compare(candidatePassword, password);
  } catch (error) {
    throw error;
  }
};

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;