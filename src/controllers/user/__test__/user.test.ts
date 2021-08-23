import { User } from '@src/database/models/User';
import * as userMocks from '@src/controllers/user/__test__/mocks/user.mock';
import { UserController } from '@src/controllers/user/user.controller';

jest.mock('@src/database/models/User');

afterEach(() => {
  jest.restoreAllMocks();
});

describe('User', () => {
  let userMocked = new User() as jest.Mocked<User>;
  const userController = new UserController();
  const _ = undefined;

  it('Create user', async () => {
    const createdUser: any = userMocks.user;
    userMocked.save.mockReturnValue(createdUser);
    const args = { data: userMocks.createUserParams };
    const result = await userController.create(_, args);
    expect(result).toEqual(expect.objectContaining(userMocks.user));
  });

  it('List a user', async () => {
    const user: any = userMocks.user;
    jest.spyOn(User, 'findById').mockReturnValue(user);
    const args = { _id: '61237f042d9b69460cc87b6a' };
    const result = await userController.getUserById(_, args);
    expect(result).toEqual(expect.objectContaining(userMocks.user));
  });

  it('Return all users', async () => {
    const users: any = userMocks.users;
    jest.spyOn(User, 'find').mockReturnValue(users);
    const result = await userController.getUsers();
    expect(result).toEqual(expect.arrayContaining(userMocks.users));
  });

  it('Update user', async () => {
    const updatedUser: any = userMocks.userUpdated;
    jest.spyOn(User, 'findByIdAndUpdate').mockReturnValue(updatedUser);
    const args = {
      _id: '61237f042d9b69460cc87b6a',
      data: userMocks.updateUserParams,
    };
    const result = await userController.updateUser(_, args);
    expect(result).toEqual(expect.objectContaining(userMocks.userUpdated));
  });
});
