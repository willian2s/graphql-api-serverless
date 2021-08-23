import './utils/module-alias';
import { ApolloServer } from 'apollo-server';
import config from 'config';
import { typeDefs, resolvers } from './graphql';
import * as database from './database';
import logger from './utils/logger';

const mongoUrl: string = config.get('App.database.mongoUrl');

let server: ApolloServer;
(async (): Promise<void> => {
  await database.connect(mongoUrl);
  server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => logger.info(`server started at ${url}`));
})();
