import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MainContext } from "./contexts/MainContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MainContext>
    <div className="h-screen w-screen">
      <App />
    </div>
  </MainContext>

  // </React.StrictMode>
);
