"use client";
import { useState } from "react";
import TodoItem from "./TodoItem";

export type TodoType = {
  id: string;
  title: string;
  complete: boolean;
};
type TodoProps = {
  Todos: TodoType[];
  toggleTodo: (id: string, complete: boolean) => void;
  removeTodo: (id: string) => void;
};

export default function Todo({ Todos, toggleTodo, removeTodo }: TodoProps) {
  const [stateTodos, setTodos] = useState(Todos);
  return (
    <ul>
      {stateTodos.map((todo, index) => (
        <TodoItem
          key={index}
          {...todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todos={stateTodos}
          state={setTodos}
        />
      ))}
    </ul>
  );
}
