import { PrismaClient, Prisma, Todo } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export const getAllTodos = async (): Promise<Todo[]> => {
  return await prisma.todo.findMany();
};

export const createTodo = async (
  newTodo: Prisma.TodoCreateInput
): Promise<Todo> => {
  console.log("create Todo service", { newTodo });

  const data = {
    ...newTodo,
    id: uuidv4(),
  };

  return await prisma.todo.create({ data });
};
