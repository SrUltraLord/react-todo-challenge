import { useMutation } from "@tanstack/react-query";

import { Todo } from "../types/Todo";
import { createTodo } from "../services/todoService";

type HookParams = {
  todoCreatedCallback: () => void
}

type MutationParams = {
  newTodo: Partial<Todo>;
};

export const useCreateTodo = ({ todoCreatedCallback }: HookParams) => {
  const createTodoMutation = useMutation({
    mutationFn: ({ newTodo }: MutationParams) => createTodo(newTodo),
    onSuccess: todoCreatedCallback
  });

  return {
    createTodoMutation
  }
};
