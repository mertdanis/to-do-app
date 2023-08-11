import React from "react";
import { useData } from "../contexts/MainContext";

function ListFilter() {
  const { toDos, toDoFilter, dispatch, activeToDos } = useData();

  const activeToDosLength = activeToDos.length;

  return (
    <div className=" flex gap-6 justify-between p-3">
      <p>{activeToDosLength} items left</p>
      <div className="flex gap-3 cursor-pointer">
        <button
          onClick={() =>
            dispatch({
              type: "filter/all",
            })
          }
        >
          All
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "filter/active",
            })
          }
        >
          Active
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "filter/completed",
            })
          }
        >
          Completed
        </button>
      </div>
      <button
        onClick={() =>
          dispatch({
            type: "todo/del/completed",
          })
        }
        className="cursor-pointer"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default ListFilter;
