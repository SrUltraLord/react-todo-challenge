import { Prisma } from "@prisma/client";

import { getAllTodos, createTodo } from "../services/todo.service";

type GetTodosParams = {
  id: string;
  title: string;
};

export const Query = {
  getTodos: async (_: any, { id, title }: GetTodosParams) => {
    return await getAllTodos();
  },
};

export const Mutation = {
  createTodo: async (_: any, { input }: { input: Prisma.TodoCreateInput }) => {
    console.log("createTodo resolver", { input });

    return await createTodo(input);
  },
};
