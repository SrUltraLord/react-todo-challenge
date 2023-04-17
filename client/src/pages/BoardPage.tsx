import { useState } from "react";

import { NavBar } from "../components/NavBar";
import { TodoFilter } from "../components/TodoFilter";
import { Button } from "../components/Button";

import { SearchIcon } from "../icons/SearchIcon";
import { BellIcon } from "../icons/BellIcon";
import { MenuIcon } from "../icons/MenuIcon";

export const BoardPage: React.FC = () => {
  const [completeFilter, setCompleteFilter] = useState<boolean>();

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

      <div className="grid flex-1 place-items-center bg-white">
        <pre> Current complete filter: {JSON.stringify(completeFilter)} </pre>
      </div>

      <div className="bg-white p-8">
        <Button text="Add a task" onClick={() => console.log("Hello")} />
      </div>
    </div>
  );
};
