const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    status: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    sellAmount: Int!
    image: String!
  }

  input UserData {
    name: String!
    email: String!
    password: String!
  }

  input ProductInput {
    first: Int!
    offset: Int!
  }

  type RootQuery {
    hello: String
    users: [User]
    products(productInput: ProductInput!): [Product]
  }

  type RootMutation {
    createUser(userInput: UserData!): User
  }  

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)