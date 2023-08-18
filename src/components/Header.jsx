import React from "react";
import { useData } from "../contexts/MainContext";

function Header() {
  const { currentTheme, dispatch } = useData();

  return (
    <div className="flex  		 rounded-2xl   justify-between items-center 	 p-6  ">
      <h1 className="uppercase sm:text-6xl text-4xl font-bold  border-b-2 pb-2 tracking-widest">
        to do
      </h1>
      <p
        className="cursor-pointer "
        onClick={() =>
          dispatch({
            type: "change/theme",
          })
        }
      >
        {currentTheme === "dark" ? (
          <i className="fa-regular fa-sun fa-2x"></i>
        ) : (
          <i className="fa-regular fa-moon fa-2x"></i>
        )}
      </p>
    </div>
  );
}

export default Header;
