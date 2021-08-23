"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_mutation_1 = __importDefault(require("@src/graphql/mutations/post.mutation"));
const user_mutation_1 = __importDefault(require("@src/graphql/mutations/user.mutation"));
exports.default = `
  type Mutation {
    ${post_mutation_1.default}
    ${user_mutation_1.default}
  }
`;
//# sourceMappingURL=index.js.map