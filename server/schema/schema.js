const graphql = require('graphql');
const { buildSchema } = graphql;

const RootQueryType = require('./types/root_query_type');

module.exports = buildSchema(`{
  query: RootQueryType
}`);
