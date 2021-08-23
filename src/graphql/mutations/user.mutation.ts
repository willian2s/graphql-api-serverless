export default `
  createUser( data: UserInput!): User!
  createUsers( data: [UserInput!]!): [User!]!
  updateUser( id: ID, data: UserInput! ): User!
  deleteUser( id: ID! ): Boolean
`;
