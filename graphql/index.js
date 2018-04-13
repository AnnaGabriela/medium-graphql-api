const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
  type Post {
    title: String
  }

  type Query {
    getLatestPosts(username: String!): [Post]
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
