import React, { useState } from "react";
import { useData } from "../contexts/MainContext";

function ListFilter() {
  const { toDos, toDoFilter, dispatch, activeToDos, currentButton } = useData();

  const activeToDosLength = activeToDos.length;

  return (
    <div className=" flex flex-col gap-4   sm:flex sm:flex-row sm:text-xl  justify-center sm:justify-between items-center sm:p-4 text-md rounded-2xl ">
      <p className="font-bold ">{activeToDosLength} To Dos Left</p>
      <div className="flex gap-3  cursor-pointer font-semibold">
        <button
          className={`    ${
            currentButton.name === "all" ? "text-green-700 font-bold" : ""
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
          className={`  ${
            currentButton.name === "active" ? "text-green-700 font-bold" : ""
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
          className={`  ${
            currentButton.name === "completed" ? "text-green-700 font-bold" : ""
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
        className="cursor-pointer font-semibold"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default ListFilter;
