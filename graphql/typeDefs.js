const gql = require("graphql-tag");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    editUser(id: ID!, name: String!, email: String!): User!
    deleteUser(id: ID!): String!
  }
`;
