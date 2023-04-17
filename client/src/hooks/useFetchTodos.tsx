import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchTodos } from "../services/todoService";

export const useFetchTodos = () => {
  const [completedFilter, setCompletedFilter] = useState<boolean>();

  const todosQuery = useQuery({
    queryKey: ["todos", { completedFilter }],
    queryFn: () => fetchTodos(completedFilter),
    initialData: {
      getTodos: []
    }
  });

  return {
    completedFilter,
    setCompletedFilter,
    todosQuery
  };
};
