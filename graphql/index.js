const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
  scalar Date
  
  type Post {
    title: String
    createdAt: Date
    subtitle: String
    link: String
  }

  type Query {
    getLatestPosts(username: String!): [Post]
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
