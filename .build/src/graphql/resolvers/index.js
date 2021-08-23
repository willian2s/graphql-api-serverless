"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const any_resolver_1 = __importDefault(require("@src/graphql/resolvers/any.resolver"));
const user_resolver_1 = __importDefault(require("@src/graphql/resolvers/user.resolver"));
exports.default = {
    Query: {
        ...any_resolver_1.default.Query,
        ...user_resolver_1.default.Query,
    },
    Mutation: {
        ...user_resolver_1.default.Mutation,
    },
};
//# sourceMappingURL=index.js.map