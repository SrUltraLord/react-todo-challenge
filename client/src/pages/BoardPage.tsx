import { useState } from "react";

import { NavBar } from "../components/NavBar"
import { TodoFilter } from "../components/TodoFilter"

import { SearchIcon } from "../icons/SearchIcon";
import { BellIcon } from "../icons/BellIcon";
import { MenuIcon } from "../icons/MenuIcon";


export const BoardPage: React.FC = () => {
  const [completeFilter, setCompleteFilter] = useState<boolean>()

  return (
    <div className="h-screen bg-slate-50">
      <NavBar>
        <h1 className="text-xl font-extrabold">Board</h1>

        <div className="flex flex-row text-slate-600 gap-3">
          <SearchIcon />
          <BellIcon />
          <MenuIcon />
        </div>
      </NavBar>

      <TodoFilter completeFilter={completeFilter} setCompleteFilter={setCompleteFilter} />

      <pre> Current complete filter: { JSON.stringify(completeFilter)  } </pre>
    </div>
  );
};
