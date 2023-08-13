import React, { useState } from "react";
import { useData } from "../contexts/MainContext";

function ListFilter() {
  const { toDos, toDoFilter, dispatch, activeToDos, currentButton } = useData();

  const activeToDosLength = activeToDos.length;

  return (
    <div className=" flex gap-6 justify-between p-4 rounded-2xl bg-slate-300">
      <p>{activeToDosLength} items left</p>
      <div className="flex gap-3 cursor-pointer">
        <button
          className={`  text-white ${
            currentButton.name === "all" ? "bg-green-500" : ""
          }`}
          onClick={(e) =>
            dispatch({
              type: "filter/all",
              payload: e.target,
            })
          }
        >
          All
        </button>
        <button
          className={` text-white ${
            currentButton.name === "active" ? "bg-green-500" : ""
          }`}
          onClick={(e) =>
            dispatch({
              type: "filter/active",
              payload: e.target,
            })
          }
        >
          Active
        </button>
        <button
          className={` text-white ${
            currentButton.name === "completed" ? "bg-green-500" : ""
          }`}
          onClick={(e) =>
            dispatch({
              type: "filter/completed",
              payload: e.target,
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
