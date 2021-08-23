import { UserController } from '@src/controllers/user/user.controller';

const user = new UserController();
export default {
  Query: {
    getUserById: user.getUserById,
    getUsers: user.getUsers,
  },
  Mutation: {
    createUser: user.create,
  },
};
