const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    status: String!
  }

  input UserData {
    name: String!
    email: String!
    password: String!
  }

  type RootQuery {
    hello: String
  }

  type RootMutation {
    createUser(userInput: UserData!): User
  }  

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)