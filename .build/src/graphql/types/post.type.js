"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  input PostInput {
    title: String!
    content: String!
    author: ID!
  }
`;
//# sourceMappingURL=post.type.js.map