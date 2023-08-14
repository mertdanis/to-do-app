import { useReducer, useContext, createContext } from "react";

const MainProvider = createContext();

const initialState = {
  currentToDo: {},
  editToDo: "",

  toDos: [],
  currentTheme: "dark",

  editMode: { status: false, value: "" },

  // all, active, completed
  toDoFilter: "all",

  currentButton: { name: "all" },
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
        const toDoLength = state.editMode.status
          ? state.editToDo?.length
          : state.currentToDo.value?.length;

        if (toDoLength === 0 || toDoLength === undefined) return state;

        return {
          ...state,
          toDos: [...state.toDos, state.currentToDo],
          currentToDo: { value: "" },
        };

      case "todo/submit/edit":
        const todoIndex = state.editMode.index;

        const editedToDoArray = state.toDos.map((val, index) => {
          if (todoIndex === index) {
            return { ...val, value: state.editToDo };
          }

          return val;
        });

        return {
          ...state,
          toDos: editedToDoArray,
          editToDo: "",
          editMode: {
            ...state.editMode,
            status: false,
          },
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
          editMode: {
            status: !state.editMode.status,
            value: action.payload.value,
            index: action.payload.index,
          },
        };

      case "todo/clear/completed":
        return {
          ...state,
          toDos: state.toDos.filter((val) => {
            if (val.toDoStatus === false) {
              return val;
            }
          }),
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
          currentButton: { name: "all", value: action.payload },
        };

      case "filter/active":
        return {
          ...state,
          toDoFilter: "active",
          currentButton: { name: "active", value: action.payload },
        };

      case "filter/completed":
        return {
          ...state,
          toDoFilter: "completed",
          currentButton: { name: "completed", value: action.payload },
        };

      // filter end

      // other

      case "change/theme":
        return {
          ...state,
          currentTheme: state.currentTheme === "dark" ? "light" : "dark",
        };

      // other end

      default:
        return state;
    }
  };

  const [
    {
      toDos,
      currentButton,
      toDoFilter,
      currentToDo,
      currentTheme,
      editMode,
      editToDo,
    },
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
        activeToDos,
        completedToDos,
        currentButton,
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
