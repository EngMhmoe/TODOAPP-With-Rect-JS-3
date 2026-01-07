import { useReducer } from "react";
import ReducerContext from "./ReducerContext";
import ToDosReducer from "../Reducers/ToDosReducer";

export default function ReducerContextProvider({ children }) {
  //ToDo List ALL Data Arrays UseRedUser
  const [useToDoListAllData, Dispatch] = useReducer(ToDosReducer, []);
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
