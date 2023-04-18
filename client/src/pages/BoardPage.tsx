import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { NavBar } from "../components/NavBar";
import { TodoFilter } from "../components/TodoFilter";
import { TodosList } from "../components/TodosList";
import { Button } from "../components/Button";
import { NoTasksPlaceholder } from "../components/NoTasksPlaceholder";

import { SearchIcon, BellIcon, MenuIcon, LoadingIcon } from "../icons";
import { useFetchTodos, useUpdateTodo } from "../hooks";

export const BoardPage: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { updateTodoMutation } = useUpdateTodo({
    refetchTodosCallback: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const { completedFilter, setCompletedFilter, todosQuery } = useFetchTodos();

  const isLoading = todosQuery.isLoading || updateTodoMutation.isLoading;

  const handleTodoStateUpdate = (id: string, currentState: boolean) => {
    if (id === undefined || currentState === undefined) {
      return;
    }

    updateTodoMutation.mutate({ id, todoData: { complete: !currentState } });
  };

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <NavBar>
        <h1 className="text-xl font-extrabold">Board</h1>

        <div className="flex flex-row gap-3 text-slate-600">
          <SearchIcon />
          <BellIcon />
          <MenuIcon />
        </div>
      </NavBar>

      <TodoFilter
        completeFilter={completedFilter}
        setCompleteFilter={setCompletedFilter}
      />

      {isLoading ? (
        <div className="grid flex-1 place-items-center bg-white">
          <LoadingIcon className="h-6 w-6 animate-spin text-slate-500" />
        </div>
      ) : todosQuery.data.getTodos.length === 0 ? (
        <NoTasksPlaceholder />
      ) : (
        <TodosList
          todos={todosQuery.data.getTodos}
          handleTodoStateUpdate={handleTodoStateUpdate}
        />
      )}

      <div className="bg-white p-8">
        <Button text="Add a task" onClick={() => navigate("/new")} />
      </div>
    </div>
  );
};
