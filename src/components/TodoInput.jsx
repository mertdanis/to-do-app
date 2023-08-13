import { useData } from "../contexts/MainContext";

function TodoInput() {
  const { toDos, currentToDo, dispatch, editMode, editToDo } = useData();

  return (
    <form className="flex gap-6  p-6 bg-gradient-to-r bg-slate-300	 rounded-2xl">
      <input
        className="p-3 w-10/12 outline-none text-black rounded-2xl     "
        type="text"
        value={editMode ? editToDo : currentToDo.value}
        placeholder={`${editMode ? "edit mode" : "write your new to do!"}`}
        onChange={(e) => {
          editMode
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
        className="font-bold p-3 bg-stone-100"
        onClick={(e) => {
          e.preventDefault();

          dispatch({
            type: "todo/submit",
          });
        }}
      >
        {editMode ? "Change" : "Add"}
      </button>
    </form>
  );
}

export default TodoInput;
