import React, { useState } from "react";
import { useData } from "../contexts/MainContext";

function ListFilter() {
  const { toDos, toDoFilter, dispatch, activeToDos, currentButton } = useData();

  const activeToDosLength = activeToDos.length;

  const clearTodo = () => {
    toDos.filter((val) => {
      if (val.toDoStatus === false) {
        console.log(val);
      }
    });
  };

  return (
    <div className=" flex gap-6 text-xl justify-between p-4 rounded-2xl ">
      <p className="font-bold ">{activeToDosLength} items left</p>
      <div className="flex gap-3  cursor-pointer">
        <button
          className={`    ${currentButton.name === "all" ? "border-b-2" : ""}`}
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
          className={`  ${currentButton.name === "active" ? "border-b-2" : ""}`}
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
          className={`  ${
            currentButton.name === "completed" ? "border-b-2" : ""
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
        onClick={() => {
          dispatch({
            type: "todo/clear/completed",
          });
        }}
        className="cursor-pointer"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default ListFilter;
