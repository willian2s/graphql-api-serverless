import { createUserParams } from '@test/common/mocks/userMocks';

const createUserObject = JSON.stringify(createUserParams).replace(
  /\"([^(\")"]+)\":/g,
  '$1:',
);
export const createUserMutation = `
mutation {
  createUser(data: ${createUserObject}) {
    _id
    firstName
    lastName
    email
    active
  }
}`;
