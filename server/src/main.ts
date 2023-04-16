import { ApolloServer } from "apollo-server";

import { todoTypes } from "./schemas/todo.schema";
import { Query, Mutation } from "./resolvers/todo.resolvers";

const server = new ApolloServer({
  typeDefs: todoTypes,
  resolvers: {
    Query,
    Mutation,
  },
  cors: {
    origin: "*",
  },
});

server.listen().then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
