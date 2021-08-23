"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
  createUser( data: UserInput!): User!
  createUsers( data: [UserInput!]!): [User!]!
  updateUser( id: ID, data: UserInput! ): User!
  deleteUser( id: ID! ): Boolean
`;
//# sourceMappingURL=user.mutation.js.map