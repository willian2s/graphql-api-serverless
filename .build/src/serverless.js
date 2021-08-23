"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlHandler = void 0;
require("./utils/module-alias");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const config_1 = __importDefault(require("config"));
const database = __importStar(require("./database"));
const graphql_1 = require("./graphql");
const mongo = config_1.default.get('App.database.mongoUrl');
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: graphql_1.typeDefs,
    resolvers: graphql_1.resolvers,
    context: async ({ event, context }) => {
        const envVariables = event.stageVariables || {
            mongoUrl: mongo,
        };
        await database.connect(envVariables.mongoUrl);
        return {
            headers: event.headers,
            functionName: context.functionName,
            event,
            context,
        };
    },
});
const graphqlHandler = server.createHandler();
exports.graphqlHandler = graphqlHandler;
//# sourceMappingURL=serverless.js.map