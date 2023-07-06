const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return { req };
  },
});

const PORT = process.env.PORT || 4000;

server.listen({ port: PORT });
console.log("Server up and running on port: " + PORT);
