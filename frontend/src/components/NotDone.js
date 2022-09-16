import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../redux/features/todoSlice";
import Item from "./Item";

function NotDone() {
  const dispatch = useDispatch();
  const { todoItems } = useSelector((state) => state.todo);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const transferedTodoId = e.dataTransfer.getData("todoId");
    dispatch(updateTodo({ transferedTodoId, stage: "isNewTodo" }));
  };

  useEffect(() => {}, [todoItems]);

  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border border-slate-700 bg-red-200"
    >
      <div className="p-1 font-semibold">Not Done</div>
      {todoItems.map((item) => {
        if (item.isNewTodo) {
          return <Item key={item._id} item={item} />;
        }
      })}
    </section>
  );
}

export default NotDone;
