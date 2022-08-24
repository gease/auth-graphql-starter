const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const util = require('node:util');

const UserType = require("./user_type");
const User = mongoose.model('user');
const {signup, login} = require('../../services/auth');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parentValue, args, context) {
        return User.findById(args.id);
      }
    },
    currentUser: {
      type: UserType,
      args: {},
      resolve(parentValue, args, context) {
        return context.user;
      }
    },
    userByEmail: {
      type: UserType,
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parentValue, args, context) {
        return User.findOne({email: args.email});
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue, args, context) {
        return signup({email: args.email, password: args.password, req: context});
      }
    },
    logout: {
      type: UserType,
      args: { },
      resolve(parentValue, args, context) {
        const user = context.user;
        return new Promise((resolve, reject) => {
          context.logout(function(err){
            if (err) {reject(next(err))};
            resolve(user);
          })
        });
      }
    },
    login: {
      type: UserType,
      args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue, args, context) {
        return login({email: args.email, password: args.password, req: context});
      }
    },
  }
});

module.exports = {RootQueryType, mutation};
