import { createUserInput } from '@src/controllers/user/dto/create-user.input';
import { updateUserInput } from '@src/controllers/user/dto/update-user.input';

export const createUserParams: createUserInput = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'email@mail.com',
  active: true,
};

export const updateUserParams: updateUserInput = {
  email: 'email-updated@mail.com',
  active: true,
};

export const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'email@mail.com',
  active: true,
};

export const userUpdated = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'email-updated@mail.com',
  active: true,
};
