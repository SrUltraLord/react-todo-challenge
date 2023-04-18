import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Todo } from "../types/Todo";
import { Button } from "../components/Button";
import { NavBar } from "../components/NavBar";
import { NewTaskForm } from "../components/NewTaskForm";
import { useCreateTodo } from "../hooks/useCreateTodo";

import { ChevronLeftIcon } from "../icons";

export const AddTaskPage = () => {
  const [todoForm, setTodoForm] = useState<Partial<Todo>>({});

  const navigate = useNavigate();
  const { createTodoMutation } = useCreateTodo({
    todoCreatedCallback: () => navigate("/"),
  });

  const createTodo = () => {
    createTodoMutation.mutate({ newTodo: todoForm });
  };

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

      <NewTaskForm setTodoForm={setTodoForm} />

      <div className="bg-white p-8">
        <Button text="Create a Task" onClick={createTodo} />
      </div>
    </div>
  );
};
