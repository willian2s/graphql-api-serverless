"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_type_1 = __importDefault(require("@src/graphql/types/post.type"));
const user_type_1 = __importDefault(require("@src/graphql/types/user.type"));
exports.default = `
  scalar JSON

  ${post_type_1.default}
  ${user_type_1.default}
`;
//# sourceMappingURL=index.js.map