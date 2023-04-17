import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { type Todo } from "../types/Todo";
import { NavBar } from "../components/NavBar";
import { TodoFilter } from "../components/TodoFilter";
import { TodosList } from "../components/TodosList";
import { Button } from "../components/Button";

import { SearchIcon } from "../icons/SearchIcon";
import { BellIcon } from "../icons/BellIcon";
import { MenuIcon } from "../icons/MenuIcon";

export const BoardPage: React.FC = () => {
  const navigate = useNavigate();

  const [completeFilter, setCompleteFilter] = useState<boolean>();
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Sacar a pasear a Jack", complete: false },
    { id: "2", title: "Jugar CSGO", complete: true },
  ]);

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
        completeFilter={completeFilter}
        setCompleteFilter={setCompleteFilter}
      />

      <TodosList todos={todos} />

      <div className="bg-white p-8">
        <Button text="Add a task" onClick={() => navigate("/new")} />
      </div>
    </div>
  );
};
