// Import React Hooks
import { useReducer } from "react";

// Import Context
import ReducerContext from "./ReducerContext";

// Import Reducer Function
import ToDosReducer from "../Reducers/ToDosReducer";

export default function ReducerContextProvider({ children }) {
  // Initialize To-Do List State and Reducer Dispatch
  const [useToDoListAllData, Dispatch] = useReducer(ToDosReducer, []);

  // Provide To-Do List State and Dispatch to Child Components
  return (
    <ReducerContext.Provider
      value={{
        useToDoListAllData: useToDoListAllData,
        Dispatch: Dispatch,
      }}
    >
      {children}
    </ReducerContext.Provider>
  );
}
