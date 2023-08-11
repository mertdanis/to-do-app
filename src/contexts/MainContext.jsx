import { useReducer, useContext, createContext } from "react";

const MainProvider = createContext();

const initialState = {
  currentToDo: {},
  editToDo: "",

  toDos: [],
  currentTheme: "dark",

  editMode: false,

  // all, active, completed
  toDoFilter: "all",
};

function MainContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      // toDo main

      case "todo/add":
        return {
          ...state,

          currentToDo: {
            value: action.payload,
            toDoStatus: false,
          },
        };

      case "todo/submit":
        return {
          ...state,
          toDos: [...state.toDos, state.currentToDo],
          currentToDo: { value: "" },
          editToDo: "",
          editMode: false,
        };

      case "todo/status":
        const statusIndex = state.toDos[action.payload];

        const statusUpdate = state.toDos.map((value) => {
          if (value === statusIndex) {
            const status = value.toDoStatus;
            return { ...value, toDoStatus: !status };
          }

          return value;
        });

        return {
          ...state,
          toDos: statusUpdate,
        };

      case "todo/del":
        const delIndex = state.toDos[action.payload];

        const delToDo = state.toDos.filter((a) => {
          if (a !== delIndex) {
            return a;
          }
        });

        return {
          ...state,
          toDos: delToDo,
        };

      case "todo/edit":
        return {
          ...state,
          editMode: !state.editMode,
        };

      case "todo/editValue":
        const editIndex = state.toDos[action.payload];

        return {
          ...state,
          editToDo: action.payload,
        };

      // toDo main end

      // filter

      case "filter/all":
        return {
          ...state,
          toDoFilter: "all",
        };

      case "filter/active":
        return {
          ...state,
          toDoFilter: "active",
        };

      case "filter/completed":
        return {
          ...state,
          toDoFilter: "completed",
        };

      // filter end

      // other

      case "change/theme":
        return {
          ...state,
          currentTheme: state.currentTheme === "dark" ? "light" : "dark",
        };

      case "todo/del/completed":
        return {
          ...state,
        };

      // other end

      default:
        return state;
    }
  };

  const [
    { toDos, toDoFilter, currentToDo, currentTheme, editMode, editToDo },
    dispatch,
  ] = useReducer(reducer, initialState);

  const completedToDos = toDos.filter((val) => {
    if (val.toDoStatus !== false) {
      return val;
    }
  });

  const activeToDos = toDos.filter((val) => {
    if (val.toDoStatus === false) {
      return val;
    }
  });

  return (
    <MainProvider.Provider
      value={{
        toDos,
        currentToDo,
        toDoFilter,
        editMode,
        dispatch,
        currentTheme,
        editToDo,
        completedToDos,
        activeToDos,
      }}
    >
      {children}
    </MainProvider.Provider>
  );
}

const useData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, useData };
