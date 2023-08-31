import { useData } from "../contexts/MainContext";
import ListFilter from "./ListFilter";

function TodoList() {
  const { toDos, toDoFilter, completedToDos, activeToDos } = useData();

  return (
    <div className="  text-center   ">
      {toDoFilter === "all" &&
        toDos.map((val, i) => {
          return <ToDoListItem key={i} ToDoValue={val} index={i} />;
        })}

      {toDoFilter === "active" &&
        activeToDos.map((val, i) => {
          return <ToDoListItem key={i} ToDoValue={val} index={i} />;
        })}

      {toDoFilter === "completed" &&
        completedToDos.map((val, i) => {
          return <ToDoListItem key={i} ToDoValue={val} index={i} />;
        })}
    </div>
  );
}

function ToDoListItem({ ToDoValue, index }) {
  const { dispatch, toDoFilter } = useData();
  const { value, toDoStatus } = ToDoValue;

  return (
    <li
      className={` overflow-x-auto  flex items-center sm:px-6  px-4 py-1 border-b-2 last:border-b-0 first:border-t-2 
  ${toDoStatus === true ? "bg-green-800 " : ""}
   ${toDoFilter === "all" ? "justify-between" : "justify-center items-center"}`}
    >
      {toDoFilter === "all" && (
        <p
          onClick={() => {
            dispatch({
              type: "todo/status",
              payload: index,
            });
          }}
          className={`rounded-2xl sm:h-[30px] sm:w-[30px] h-[26px] w-[26px] bg-transparent border-2 cursor-pointer ${
            toDoStatus === true ? "bg-green-400" : "bg-red-700"
          }`}
        ></p>
      )}
      <p className="p-7 sm:text-xl text-xs uppercase tracking-widest  font-bold">
        {value}
      </p>

      {toDoFilter === "all" && (
        <div className="flex gap-4 sm:text-xl ">
          <i
            onClick={() =>
              dispatch({
                type: "todo/del",
                payload: index,
              })
            }
            className="fa-solid fa-x cursor-pointer"
          ></i>
          <i
            onClick={() =>
              dispatch({
                type: "todo/edit",
                payload: { value: value, index: index },
              })
            }
            className="fa-regular fa-pen-to-square cursor-pointer"
          ></i>
        </div>
      )}
    </li>
  );
}

export default TodoList;
