import { gql, request } from "graphql-request";

import config from "../config";
import { Todo } from "../types/Todo";

const GQL_ENDPOINT = config.serverUrl + "/graphql";

type GetTodosResponse = {
  getTodos: Todo[];
};

type UpdateTodoResponse = {
  updateTodo: string;
};

export const fetchTodos = async (
  complete?: boolean
): Promise<GetTodosResponse> => {
  const getTodosQuery = gql`
    query Todos($complete: Boolean) {
      getTodos(complete: $complete) {
        id
        title
        complete
      }
    }
  `;

  return await request<GetTodosResponse>(GQL_ENDPOINT, getTodosQuery, {
    complete,
  });
};

export const updateTodo = async (
  id: string,
  todoData: Partial<Todo>
): Promise<UpdateTodoResponse> => {
  const updateTodoMutation = gql`
    mutation UpdateTodo($updateTodoId: ID!, $input: UpdateTodo!) {
      updateTodo(id: $updateTodoId, input: $input)
    }
  `;

  return await request<UpdateTodoResponse>(GQL_ENDPOINT, updateTodoMutation, {
    updateTodoId: id,
    input: todoData,
  });
};
