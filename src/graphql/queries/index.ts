import anyQuery from '@src/graphql/queries/any.query';
import postQuery from '@src/graphql/queries/post.query';
import userQuery from '@src/graphql/queries/user.query';

export default `
  type Query {
    ${anyQuery}
    ${postQuery}
    ${userQuery}
  }
`;
