import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos, insertTodo } from "../redux/features/todoSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewTodo() {
  const [todo, setTodo] = useState({
    text: "",
    isNewTodo: true,
    isInProgress: false,
    isCompleted: false,
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo.text !== "") {
      await dispatch(insertTodo({ todo, toast }));
      await dispatch(getTodos());
      setTodo({ ...todo, text: "" });
    }
  };

  return (
    <div className="mt-4 bg-amber-200 p-2 grow shrink basis-[5%]">
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo" className="mr-4">
          Enter New Todo
        </label>
        <input
          id="new-todo"
          className="focus:outline-0 px-1"
          onChange={handleInputChange}
          value={todo.text}
          autoComplete="off"
        />
        <button
          type="submit"
          className="ml-4 px-4 border rounded-md border-yellow-700 focus:bg-yellow-700 focus:text-white hover:bg-yellow-700 hover:text-white"
        >
          Insert
        </button>
      </form>
    </div>
  );
}

export default NewTodo;
