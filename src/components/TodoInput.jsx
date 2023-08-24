import { useData } from "../contexts/MainContext";

import { useRef, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoInput() {
  const { toDos, currentToDo, dispatch, editMode, editToDo, notify } =
    useData();

  const [focus, setFocus] = useState(true);

  const emailInput = useRef(null);

  useEffect(() => {
    if (emailInput.current) {
      emailInput.current.focus();
      setFocus(true);
    }
  }, [toDos, editMode]);

  return (
    <form className=" flex relative py-6 	 ">
      <div className="sm:h-[30px] sm:w-[30px] h-[16px] w-[16px]  rounded-full bg-red-500 absolute z-10 sm:block hidden sm:left-6 sm:top-9  left-4 top-9 "></div>
      <input
        onMouseLeave={() => setFocus(false)}
        onMouseEnter={() => setFocus(true)}
        className={`  sm:text-xl sm:text-center text-xs  font-semibold uppercase tracking-widest outline   p-3 grow outline-none  ${
          focus ? "text-white bg-input__bg" : "text-black"
        }`}
        type="text"
        value={editMode.status ? editToDo : currentToDo.value}
        ref={emailInput}
        placeholder={`${
          editMode.status
            ? `Edit: ${editMode.value}`
            : " What Will You do Today?"
        }`}
        onChange={(e) => {
          editMode.status
            ? dispatch({
                type: "todo/editValue",
                payload: e.target.value,
              })
            : dispatch({
                type: "todo/add",
                payload: e.target.value,
              });
        }}
      />
      <button
        className={`font-bold  z-20 p-3 rounded-2xl absolute sm:right-1 sm:top-[30px] right-0 top-6  sm:text-md text-xs   ${
          focus ? "text-white" : "text-black"
        }`}
        onClick={(e) => {
          e.preventDefault();
          if (currentToDo.value.length > 0 || editToDo.length > 0) {
            notify();
          }
          editMode.status
            ? dispatch({
                type: "todo/submit/edit",
                payload: editToDo,
              })
            : dispatch({
                type: "todo/submit",
                payload: currentToDo.value,
              });
        }}
      >
        {editMode.status ? "CHANGE" : "ADD"}
      </button>
    </form>
  );
}

export default TodoInput;
