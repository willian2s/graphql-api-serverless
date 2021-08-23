export default `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String
    active: Boolean!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String
    active: Boolean!
    lastUser: Boolean
  }
`;
