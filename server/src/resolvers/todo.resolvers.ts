import { Prisma } from "@prisma/client";

import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/todo.service";

type GetTodosInput = { complete: boolean | null };

type CreateTodoInput = { input: Prisma.TodoCreateInput };
type UpdateTodoInput = { id: string; input: Prisma.TodoUpdateInput };
type DeleteTodoInput = { id: string };

export const Query = {
  getTodos: async (_: any, { complete }: GetTodosInput) => {
    return await getAllTodos(complete);
  },
};

export const Mutation = {
  createTodo: async (_: any, { input }: CreateTodoInput) => {
    return await createTodo(input);
  },
  updateTodo: async (_: any, { id, input }: UpdateTodoInput) => {
    return await updateTodo(id, input);
  },
  deleteTodo: async (_: any, { id }: DeleteTodoInput) => {
    return await deleteTodo(id);
  },
};
