import { type Todo } from "../types/Todo";
import { CheckIcon } from "../icons/CheckIcon"

type Props = {
  todos: Todo[];
};

export const TodosList: React.FC<Props> = ({ todos }: Props) => {
  return (
    <div className="flex flex-1 flex-col space-y-10 bg-white p-8">
      {todos.map((todo) => (
        <div key={todo.id} className="flex h-fit w-full flex-row space-x-6">
          <div className="flex justify-center items-center">
            <input
              type="checkbox"
              checked={todo.complete}
              className="appearance-none h-6 w-6 rounded-lg border-[#5DBD76] border-2 p-2 checked:bg-[#5DBD76]"
            />
            { todo.complete && <CheckIcon className="absolute w-4 h-4 text-white" /> }
          </div>

          <p className="text-slate-800 text-md">{todo.title}</p>
        </div>
      ))}
    </div>
  );
};
