"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const any_query_1 = __importDefault(require("@src/graphql/queries/any.query"));
const post_query_1 = __importDefault(require("@src/graphql/queries/post.query"));
const user_query_1 = __importDefault(require("@src/graphql/queries/user.query"));
exports.default = `
  type Query {
    ${any_query_1.default}
    ${post_query_1.default}
    ${user_query_1.default}
  }
`;
//# sourceMappingURL=index.js.map