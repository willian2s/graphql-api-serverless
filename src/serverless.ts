import './utils/module-alias';
import { ApolloServer } from 'apollo-server-lambda';
import config from 'config';
import * as database from './database';
import { resolvers, typeDefs } from './graphql';

const mongo: string = config.get('App.database.mongoUrl');

const server = new ApolloServer({
  typeDefs,
  resolvers,
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

export { graphqlHandler };
