import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../redux/features/todoSlice";
import Item from "./Item";

function Completed() {
  const dispatch = useDispatch();

  const { todoItems } = useSelector((state) => state.todo);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const transferedTodoId = e.dataTransfer.getData("todoId");
    dispatch(updateTodo({ transferedTodoId, stage: "isCompleted" }));
  };

  useEffect(() => {}, [todoItems]);
  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border border-slate-700 bg-green-200"
    >
      <div className="p-1 font-semibold">Completed</div>
      {todoItems.map((item) => {
        if (item.isCompleted) {
          return <Item key={item._id} item={item} />;
        }
      })}
    </section>
  );
}

export default Completed;
