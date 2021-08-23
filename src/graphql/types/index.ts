import postType from '@src/graphql/types/post.type';
import userType from '@src/graphql/types/user.type';

export default `
  scalar JSON

  ${postType}
  ${userType}
`;
