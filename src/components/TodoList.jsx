import { useData } from "../contexts/MainContext";
import ListFilter from "./ListFilter";

function TodoList() {
  const { toDos, toDoFilter, completedToDos, activeToDos } = useData();

  return (
    <div className=" bg-white text-black text-center  ">
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
    <div
      className={`flex items-center p-3
  ${toDoStatus === true ? "bg-black text-white" : ""}
   ${toDoFilter !== "completed" ? "justify-between" : "justify-around"}`}
    >
      <p
        onClick={() => {
          dispatch({
            type: "todo/status",
            payload: index,
          });
        }}
        className={`rounded-2xl h-[30px] w-[30px] bg-transparent border-2 cursor-pointer ${
          toDoStatus === true ? "bg-green-500" : ""
        }`}
      ></p>
      <p className="p-3 capitalize ">{value}</p>

      {toDoFilter !== "completed" && (
        <div className="flex gap-3 ">
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
                payload: index,
              })
            }
            className="fa-regular fa-pen-to-square cursor-pointer"
          ></i>
        </div>
      )}
    </div>
  );
}

export default TodoList;
