import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, getTodos } from "../redux/features/todoSlice";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await dispatch(deleteTodo(id));
    await dispatch(getTodos());
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("todoId", id);
  };

  // const handleDragOver = () => {};

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, item._id)}
      className="flex justify-between border border-slate-700 p-1 rounded-lg m-1"
    >
      <h3 className="align-middle py-1 ml-4">{item.text}</h3>
      <div>
        <button
          onClick={() => handleDelete(item._id)}
          className="border border-slate-700 rounded-md px-4 py-1 text-sm bg-red-500 text-white hover:bg-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
