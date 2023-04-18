import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { Todo } from "../types/Todo";
import { Input } from "../components/Input";
import { CalendarIcon, ClockIcon, ChevronDownIcon } from "../icons";

type Props = {
  setTodoForm: Dispatch<SetStateAction<Partial<Todo>>>
};

export const NewTaskForm: React.FC<Props> = ({ setTodoForm }: Props) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const todoField = e.target.name;
    const newValue = e.target.value;

    setTodoForm((previousForm) => {
      return {
        ...previousForm,
        [todoField]: newValue,
      } as Partial<Todo>;
    });
  };

  return (
    <div className="flex-1 bg-white p-8 overflow-y-scroll">
      <form className="flex flex-col space-y-6">
        <Input
          label="Title"
          type="text"
          name="title"
          placeholder="Design team meeting"
          onChange={handleInput}
        />

        <Input
          label="Deadline"
          type="date"
          placeholder="2021-02-28"
          name="deadline"
          right={
            <CalendarIcon
              className="absolute right-4 top-4 z-0 h-6 w-6 text-[#C9C9C9]"
              strokeWidth={2}
            />
          }
          onChange={handleInput}
        />

        <div className="flex flex-row space-x-4">
          <Input
            label="Start time"
            type="time"
            placeholder="11:00"
            name="startTime"
            right={
              <ClockIcon
                className="absolute right-4 top-4 h-6 w-6 text-[#C9C9C9]"
                strokeWidth={2}
              />
            }
            onChange={handleInput}
          />

          <Input
            label="End time"
            type="time"
            placeholder="14:00"
            name="endTime"
            right={
              <ClockIcon
                className="absolute right-4 top-4 h-6 w-6 text-[#C9C9C9]"
                strokeWidth={2}
              />
            }
            onChange={handleInput}
          />
        </div>

        <Input
          label="Remind"
          placeholder="10 min early"
          name="remind"
          right={
            <ChevronDownIcon
              className="absolute right-4 top-4 h-6 w-6 text-[#C9C9C9]"
              strokeWidth={2}
            />
          }
          onChange={handleInput}
        />

        <Input
          label="Repeat"
          placeholder="Weekly"
          name="repeat"
          right={
            <ChevronDownIcon
              className="absolute right-4 top-4 h-6 w-6 text-[#C9C9C9]"
              strokeWidth={2}
            />
          }
          onChange={handleInput}
        />
      </form>
    </div>
  );
};
