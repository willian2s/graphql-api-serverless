import anyResolver from '@src/graphql/resolvers/any.resolver';
import userResolver from '@src/graphql/resolvers/user.resolver';

export default {
  Query: {
    ...anyResolver.Query,
    ...userResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
  },
};
