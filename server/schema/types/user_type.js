const graphql = require('graphql');
const expressGraphQL = require('express-graphql');
const {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLID} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: {type: GraphQLID},
        email: {type: GraphQLString},
    })
});

module.exports = UserType;
