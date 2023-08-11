import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ListFilter from "./components/ListFilter";

import { MainContext } from "./contexts/MainContext";

import { useData } from "./contexts/MainContext";

function App() {
  const { toDos } = useData();

  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center h-screen w-screen bg-white">
        <Header />
        <TodoInput />
        <TodoList />
        {toDos.length > 0 && <ListFilter />}
      </div>
    </>
  );
}

export default App;
