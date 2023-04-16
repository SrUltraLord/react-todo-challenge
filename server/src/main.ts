import { ApolloServer } from "apollo-server";

import { todoTypes } from "./schemas/todo.schema";
import { Query, TodoMutationResolver } from "./resolvers/todo.resolvers";

const server = new ApolloServer({
  typeDefs: todoTypes,
  // schema: {},
  resolvers: {
    Query,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
