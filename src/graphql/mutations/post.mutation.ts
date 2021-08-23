export default `
  createPost( data: PostInput!): Post!
  updatePost( id: ID, data: PostInput! ): Post!
  deletePost( id: ID! ): Boolean
`;
