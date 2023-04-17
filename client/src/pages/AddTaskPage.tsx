import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { NavBar } from "../components/NavBar";

import {
  CalendarIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from "../icons";

export const AddTaskPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <NavBar>
        <div className="flex flex-row space-x-2">
          <button className="w-8" onClick={() => navigate("/")}>
            <ChevronLeftIcon className="h-3 w-3 text-black" strokeWidth={4} />
          </button>
          <h1 className="text-xl font-extrabold">Add Task</h1>
        </div>
      </NavBar>

      <div className="flex flex-1 flex-col space-y-6 bg-white p-8">
        <Input label="Title" type="text" placeholder="Design team meeting" />

        <Input
          label="Deadline"
          type="date"
          placeholder="2021-02-28"
          right={
            <CalendarIcon
              className="absolute right-4 top-4 z-0 h-6 w-6 text-[#C9C9C9]"
              strokeWidth={2}
            />
          }
        />

        <div className="flex flex-row space-x-4">
          <Input
            label="Start time"
            type="time"
            placeholder="11:00"
            right={
              <ClockIcon
                className="absolute right-4 top-4 h-6 w-6 text-[#C9C9C9]"
                strokeWidth={2}
              />
            }
          />

          <Input
            label="End time"
            type="time"
            placeholder="14:00"
            right={
              <ClockIcon
                className="absolute right-4 top-4 h-6 w-6 text-[#C9C9C9]"
                strokeWidth={2}
              />
            }
          />
        </div>

        <Input
          label="Remind"
          placeholder="10 min early"
          right={
            <ChevronDownIcon
              className="absolute right-4 top-4 h-6 w-6 text-[#C9C9C9]"
              strokeWidth={2}
            />
          }
        />

        <Input
          label="Repeat"
          placeholder="Weekly"
          right={
            <ChevronDownIcon
              className="absolute right-4 top-4 h-6 w-6 text-[#C9C9C9]"
              strokeWidth={2}
            />
          }
        />
      </div>

      <div className="bg-white p-8">
        <Button text="Create a Task" onClick={() => navigate("/new")} />
      </div>
    </div>
  );
};
