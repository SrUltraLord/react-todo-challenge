import { gql, request } from "graphql-request";

import { Todo } from "../types/Todo";

import config from "../config";

const GQL_ENDPOINT = config.serverUrl + "/graphql";

type GetTodosResponse = {
  getTodos: Todo[];
};

export const fetchTodos = async (
  complete?: boolean
): Promise<GetTodosResponse> => {
  const todosRequest = gql`
    query Todos($complete: Boolean) {
      getTodos(complete: $complete) {
        id
        title
        complete
      }
    }
  `;

  return await request<GetTodosResponse>(GQL_ENDPOINT, todosRequest, {
    complete,
  });
};
