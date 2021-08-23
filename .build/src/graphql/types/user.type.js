"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
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
//# sourceMappingURL=user.type.js.map