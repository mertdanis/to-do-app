import React from "react";
import { useData } from "../contexts/MainContext";

function Header() {
  const { currentTheme, dispatch } = useData();

  return (
    <div className="flex bg-slate-300			 rounded-2xl   justify-between items-center 	 p-6  ">
      <h1 className="uppercase text-whites text-6xl">todo</h1>
      <p
        className="cursor-pointer "
        onClick={() =>
          dispatch({
            type: "change/theme",
          })
        }
      >
        {currentTheme === "dark" ? (
          <i className="fa-regular fa-moon fa-2x"></i>
        ) : (
          <i className="fa-regular fa-sun fa-2x"></i>
        )}
      </p>
    </div>
  );
}

export default Header;
