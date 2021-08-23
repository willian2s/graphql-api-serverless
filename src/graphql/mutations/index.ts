import postMutation from '@src/graphql/mutations/post.mutation';
import userMutation from '@src/graphql/mutations/user.mutation';

export default `
  type Mutation {
    ${postMutation}
    ${userMutation}
  }
`;
