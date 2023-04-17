import { useMutation } from "@tanstack/react-query";

import { Todo } from "../types/Todo";
import { updateTodo } from "../services/todoService";

type HookParams = {
  refetchTodosCallback: () => void;
};

type MutationParams = {
  id: string;
  todoData: Partial<Todo>;
};

export const useUpdateTodo = ({ refetchTodosCallback }: HookParams) => {
  const updateTodoMutation = useMutation({
    mutationFn: ({ id, todoData }: MutationParams) => updateTodo(id, todoData),
    onSuccess: refetchTodosCallback,
  });

  return {
    updateTodoMutation,
  };
};
