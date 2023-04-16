import { PrismaClient, Prisma, Todo } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export const getAllTodos = async (
  complete: boolean | null
): Promise<Todo[]> => {
  return await prisma.todo.findMany({
    where: {
      complete: complete ?? undefined,
    },
  });
};

export const createTodo = async (
  newTodo: Prisma.TodoCreateInput
): Promise<Todo> => {
  const data = {
    ...newTodo,
    id: uuidv4(),
  };

  return await prisma.todo.create({ data });
};

export const updateTodo = async (
  todoId: string,
  todo: Prisma.TodoUpdateInput
): Promise<string> => {
  const { id } = await prisma.todo.update({
    where: { id: todoId },
    data: todo,
  });

  return id;
};

export const deleteTodo = async (todoId: string): Promise<boolean> => {
  const deletedTodo = await prisma.todo.delete({ where: { id: todoId } });
  return deletedTodo !== null;
};
