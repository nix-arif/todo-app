import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../redux/features/todoSlice";
import Item from "./Item";

function InProgress() {
  const dispatch = useDispatch();

  const { todoItems } = useSelector((state) => state.todo);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const transferedTodoId = e.dataTransfer.getData("todoId");
    dispatch(updateTodo({ transferedTodoId, stage: "isInProgress" }));
  };

  useEffect(() => {}, [todoItems]);

  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border border-slate-700 bg-yellow-200"
    >
      <div className="p-1 font-semibold">In Progress</div>
      {todoItems.map((item) => {
        if (item.isInProgress) {
          return <Item key={item._id} item={item} />;
        }
      })}
    </section>
  );
}

export default InProgress;
