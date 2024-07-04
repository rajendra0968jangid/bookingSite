import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../todoSlice.js";
export default function RemoveTodo() {
  const todoData = useSelector((state) => state.todoSlice.todos);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      {todoData.map((todo) => (
        <div className="flex gap-2" key={todo.id}>
          <p>{todo.title}</p>
          <button
            type="button"
            onClick={() => handleRemove(todo.id)}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}
