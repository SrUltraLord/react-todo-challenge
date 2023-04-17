import { useNavigate } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { TodoFilter } from "../components/TodoFilter";
import { TodosList } from "../components/TodosList";
import { Button } from "../components/Button";

import { SearchIcon, BellIcon, MenuIcon } from "../icons";
import { useFetchTodos } from "../hooks/useFetchTodos"

export const BoardPage: React.FC = () => {
  const navigate = useNavigate();

  const { completedFilter, setCompletedFilter, todosQuery } = useFetchTodos();

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

      <TodosList todos={todosQuery.data?.getTodos} />

      <div className="bg-white p-8">
        <Button text="Add a task" onClick={() => navigate("/new")} />
      </div>
    </div>
  );
};
