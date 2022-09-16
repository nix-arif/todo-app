import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Completed from "./components/Completed";
import InProgress from "./components/InProgress";
import NewTodo from "./components/NewTodo";
import NotDone from "./components/NotDone";
import { getTodos } from "./redux/features/todoSlice";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <main className="container mx-auto bg-slate-50 border border-slate-500 h-screen grid grid-rows-[70px_1fr] gap-1">
      <NewTodo />
      <div className="grid grid-cols-3 gap-1">
        <NotDone />
        <InProgress />
        <Completed />
      </div>
      <ToastContainer />
    </main>
  );
}

export default App;
