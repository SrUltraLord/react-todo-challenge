import { PrismaClient, Prisma, Todo } from "@prisma/client";
import { GraphQLError } from "graphql";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export const getAllTodos = async (
  complete: boolean | null
): Promise<Partial<Todo>[]> => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "asc"
    },
    where: {
      complete: complete ?? undefined,
    },
  });
};

export const getTodoById = async (todoId: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findUnique({ where: { id: todoId } });

  if (todo === null) {
    throw new GraphQLError(`No se ha encontrado un todo con el id ${todoId}`, {
      extensions: {
        code: "NOT_FOUND",
        status: 404,
      },
    });
  }

  return todo;
};

export const createTodo = async (
  newTodo: Prisma.TodoCreateInput
): Promise<Todo> => {
  const data = {
    ...newTodo,
    deadline: new Date(newTodo.deadline),
    id: uuidv4(),
  };

  return await prisma.todo.create({ data });
};

export const updateTodo = async (
  todoId: string,
  todo: Prisma.TodoUpdateInput
): Promise<string> => {
  await getTodoById(todoId);

  const { id } = await prisma.todo.update({
    where: { id: todoId },
    data: todo,
  });

  return id;
};

export const deleteTodo = async (todoId: string): Promise<boolean> => {
  await getTodoById(todoId);

  const deletedTodo = await prisma.todo.delete({ where: { id: todoId } });
  return deletedTodo !== null;
};
