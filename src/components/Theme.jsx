import React from "react";
import { useData } from "../contexts/MainContext";

function Theme() {
  const { currentTheme, dispatch } = useData();

  const setTheme = () => {
    const body = document.querySelector("body");

    if (currentTheme === "light") {
      body.setAttribute("data-theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
    }
  };

  setTheme();
}

export default Theme;
