import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ListFilter from "./components/ListFilter";
import Theme from "./components/Theme";
import { MainContext } from "./contexts/MainContext";

import { useData } from "./contexts/MainContext";

function App() {
  const { toDos } = useData();

  return (
    <>
      <div className="flex  bg-body__background flex-col items-center h-screen w-screen  ">
        <div className="flex bg-app__background text-text__color justify-center 	  rounded-2xl p-6 		   flex-col gap-6 w-4/12 mt-[12rem]">
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
