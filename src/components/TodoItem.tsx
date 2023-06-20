"use client";

import React, { Dispatch, SetStateAction } from "react";
import { TodoType } from "./Todo";
type TodoItemPropstype = {
  id: string;
  title: string;
  complete: boolean;
  todos: TodoType[];
  toggleTodo: (id: string, complete: boolean) => void;
  removeTodo: (id: string) => void;
  state: Dispatch<SetStateAction<TodoType[]>>;
};
export default function TodoItem({
  id,
  title,
  complete,
  todos,
  toggleTodo,
  removeTodo,
  state,
}: TodoItemPropstype) {
  return (
    <li
      onDoubleClick={() => {
        removeTodo(id);
        const newTodos = todos.filter((todo) => todo.id !== id);
        state(newTodos);
      }}
      className="flex gap-1 items-center"
    >
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
