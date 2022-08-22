const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const {RootQueryType, mutation} = require('./types/root_query_type');

module.exports = new GraphQLSchema({query: RootQueryType, mutation: mutation});
