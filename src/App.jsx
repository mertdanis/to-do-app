import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ListFilter from "./components/ListFilter";
import Theme from "./components/Theme";

import { MainContext } from "./contexts/MainContext";
import { useData } from "./contexts/MainContext";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { toDos } = useData();

  return (
    <>
      <div className="flex  bg-body__background flex-col sm:justify-center items-center  h-screen w-screen  overflow-y-auto overflow-0">
        <div className="flex  bg-app__background text-text__color justify-center   rounded-2xl p-6  	w-10/12			sm:w-4/12	 my-6   flex-col gap-6  ">
          <ToastContainer />
          <Theme />
          <Header />
          <TodoInput />
          <TodoList />
          {toDos.length > 0 && <ListFilter />}
        </div>
      </div>
    </>
  );
}

export default App;
