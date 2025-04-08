const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID!
    startDate: String!
    endDate: String!
    title: String!
    authors: [String!]!
    subject: String!
    area: String!
    summary: String!
    publicationYear: Int!
    createdAt: String!
    updatedAt: String!
  }

  input BookInput {
    startDate: String!
    endDate: String!
    title: String!
    authors: [String!]!
    subject: String!
    area: String!
    summary: String!
    publicationYear: Int!
  }

  type Query {
    getBooks: [Book!]!
    getBook(id: ID!): Book
  }

  type Mutation {
    createBook(input: BookInput!): Book!
    updateBook(id: ID!, input: BookInput!): Book!
    deleteBook(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;