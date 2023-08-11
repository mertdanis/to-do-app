import React from "react";
import { useData } from "../contexts/MainContext";

function Header() {
  const { currentTheme, dispatch } = useData();

  return (
    <div className="flex   justify-between items-center 	 p-6 h-10/12 ">
      <h1 className="uppercase text-whites text-6xl">todo</h1>
      <p
        className="cursor-pointer"
        onClick={() =>
          dispatch({
            type: "change/theme",
          })
        }
      >
        {currentTheme === "dark" ? (
          <i className="fa-regular fa-sun"></i>
        ) : (
          <i className="fa-regular fa-moon"></i>
        )}
      </p>
    </div>
  );
}

export default Header;
