import { Todo } from "../types/Todo";
import { CheckIcon } from "../icons/CheckIcon";

type Props = {
  todos: Todo[];
  handleTodoStateUpdate: (id: string, newState: boolean) => void;
};

export const TodosList: React.FC<Props> = ({
  todos,
  handleTodoStateUpdate,
}: Props) => {
  return (
    <div className="flex flex-1 flex-col space-y-10 bg-white p-8">
      {todos.map(({id, title, complete}) => (
        <div key={id} className="flex h-fit w-full flex-row space-x-6">
          <div className={`flex items-center justify-center rounded-lg ${complete && "bg-[#5DBD76]"}`}>
            <input
              className="h-6 w-6 appearance-none rounded-lg border-2 border-[#5DBD76] p-2 bg-none z-10"
              type="checkbox"
              checked={complete}
              onChange={() => handleTodoStateUpdate(id, complete)}
            />

            <CheckIcon className="absolute h-4 w-4 text-white" />
          </div>

          <p className="text-md text-slate-800">{title}</p>
        </div>
      ))}
    </div>
  );
};
