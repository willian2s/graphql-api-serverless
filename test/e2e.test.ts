import { ApolloServer } from 'apollo-server';
import config from 'config';
import { getUserByIdQuery, getUsersQuery } from '@test/common/queries';
import { createUserMutation } from '@test/common/mutations';
import { typeDefs, resolvers } from '@src/graphql';
import * as database from '@src/database';
import { User } from '@src/database/models/User';
import { user } from './common/mocks/userMocks';

const mongoUrl: string = config.get('App.database.mongoUrl');

let server: ApolloServer;
let id: string;
beforeAll(async () => {
  await database.connect(mongoUrl);
  server = new ApolloServer({ typeDefs, resolvers });
});

afterAll(async () => {
  await User.deleteMany({});
  await database.close();
});

describe('User', () => {
  it('should be create a user ', async () => {
    const result = await server.executeOperation({
      query: createUserMutation,
    });
    id = result.data?.createUser._id;
    expect(result.data?.createUser).toEqual(
      expect.objectContaining({
        ...user,
      }),
    );
  });

  it('should find a user by id', async () => {
    const result = await server.executeOperation({
      query: getUserByIdQuery(id),
    });
    expect(result.data?.getUserById).toEqual(
      expect.objectContaining({
        ...user,
      }),
    );
  });

  it('should find all users', async () => {
    const result = await server.executeOperation({
      query: getUsersQuery,
    });
    expect(result.data?.getUsers).toEqual(
      expect.arrayContaining([
        {
          _id: id,
          ...user,
        },
      ]),
    );
  });
});
