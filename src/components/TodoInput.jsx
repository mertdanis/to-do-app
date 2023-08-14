import { useData } from "../contexts/MainContext";

function TodoInput() {
  const { toDos, currentToDo, dispatch, editMode, editToDo } = useData();

  return (
    <form className="flex  gap-6  p-6 bg-gradient-to-r 	 rounded-2xl">
      <input
        className=" text-black text-center uppercase tracking-widest black p-3 w-10/12 outline-none rounded-2xl     "
        type="text"
        value={editMode.status ? editToDo : currentToDo.value}
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
        className="font-bold p-3  rounded-2xl"
        onClick={(e) => {
          e.preventDefault();

          editMode.status
            ? dispatch({
                type: "todo/submit/edit",
              })
            : dispatch({
                type: "todo/submit",
              });
        }}
      >
        {editMode.status ? "Change" : "Add"}
      </button>
    </form>
  );
}

export default TodoInput;
