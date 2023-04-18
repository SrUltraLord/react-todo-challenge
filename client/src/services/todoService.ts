import { gql, request } from "graphql-request";

import config from "../config";
import { Todo } from "../types/Todo";

const GQL_ENDPOINT = config.serverUrl + "/graphql";

type GetTodosResponse = {
  getTodos: Todo[];
};

type TodoMutationResponse = {
  updateTodo: string;
};

type CreateMutationResponse = {
  createTodo: string;
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
): Promise<TodoMutationResponse> => {
  const updateTodoMutation = gql`
    mutation UpdateTodo($updateTodoId: ID!, $input: UpdateTodo!) {
      updateTodo(id: $updateTodoId, input: $input)
    }
  `;

  return await request<TodoMutationResponse>(GQL_ENDPOINT, updateTodoMutation, {
    updateTodoId: id,
    input: todoData,
  });
};

export const createTodo = async (todoData: Partial<Todo>) => {
  const createTodoMutation = gql`
    mutation CreateTodo($input: CreateTodo!) {
      createTodo(input: $input) {
        id
      }
    }
  `;

  return await request<TodoMutationResponse>(GQL_ENDPOINT, createTodoMutation, {
    input: todoData,
  });
};
