"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const mutations_1 = __importDefault(require("./mutations"));
const queries_1 = __importDefault(require("./queries"));
const types_1 = __importDefault(require("./types"));
const typeDefs = apollo_server_1.gql `
  ${types_1.default.concat(queries_1.default).concat(mutations_1.default)}
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map