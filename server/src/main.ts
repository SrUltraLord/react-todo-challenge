import { ApolloServer } from "apollo-server";

import { todoTypes } from "./schemas/todo.schema";
import { Query, Mutation } from "./resolvers/todo.resolvers";

const server = new ApolloServer({
  typeDefs: todoTypes,
  resolvers: {
    Query,
    Mutation,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
