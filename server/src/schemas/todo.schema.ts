import { gql } from "apollo-server";

export const todoTypes = gql`
  type Query {
    getTodos: [Todo!]!
  }

  type Mutation {
    createTodo(input: CreateTodo!): Todo!
    updateTodo(id: ID!, input: UpdateTodo!): ID!
    deleteTodo(id: ID!): Boolean!
  }

  type Todo {
    id: ID!
    title: String!
    deadline: String!
    startTime: String!
    endTime: String!
    remind: String
    repeat: String
  }

  input CreateTodo {
    title: String!
    deadline: String!
    startTime: String!
    endTime: String!
    remind: String
    repeat: String
  }

  input UpdateTodo {
    title: String!
    deadline: String!
    startTime: String!
    endTime: String!
    remind: String
    repeat: String
  }
`;
