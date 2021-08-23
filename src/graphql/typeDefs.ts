import { gql } from 'apollo-server';
import mutations from './mutations';
import queries from './queries';
import types from './types';

const typeDefs = gql`
  ${types.concat(queries).concat(mutations)}
`;

export default typeDefs;
