import { User } from '@src/database/models/User';
import { createUserInput } from '@src/controllers/user/dto/create-user.input';
import { updateUserInput } from './dto/update-user.input';

export class UserController {
  public async create(_: any, args: any): Promise<User> {
    const { firstName, lastName, email, active }: createUserInput = args.data;
    const user = new User({
      firstName,
      lastName,
      email,
      active,
    });
    const result = await user.save();
    return result;
  }

  public async getUserById(_: any, args: any): Promise<User | null> {
    const { _id: id } = args;
    const user = await User.findById(id);
    return user;
  }

  public async getUsers(): Promise<User[]> {
    const users = await User.find();
    return users;
  }

  public async updateUser(_: any, args: any): Promise<User | null> {
    const { _id: id } = args;
    const { ...data }: updateUserInput = args;
    const updatedUser = await User.findByIdAndUpdate(id, data);
    return updatedUser;
  }
}
