import { createContext, useContext, useMemo, useReducer } from "react";

const ToDoContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "create": {
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            name: action.payload.name,
            status: false,
            id: action.payload.id,
          },
        ],
      };
    }
    case "check": {
      return {
        ...state,
        todo: state.todo.map(
          (item) =>
            item.id === action.payload
              ? { ...item, status: !item.status } // Update `status` for matching item
              : item // Keep the rest unchanged
        ),
      };
    }
    case "remove": {
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    }
    default: {
      throw new Error("Unknown action");
    }
  }
}

const initialState = {
  todo: [],
};

function ToDoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
}

export default ToDoProvider;

export function useToDo() {
  const context = useContext(ToDoContext);

  if (!context) {
    throw new Error("useToDo must be used within a ToDoProvider");
  }

  const { state, dispatch } = context;
  return { state, dispatch };
}
