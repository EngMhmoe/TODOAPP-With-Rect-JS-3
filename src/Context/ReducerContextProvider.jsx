import { useReducer } from "react";

import ReducerContext from "./ReducerContext";

import ToDosReducer from "../Reducers/ToDosReducer";

// ==========================================================
// Start Component Reducer Context Provider
// ==========================================================

export default function ReducerContextProvider({ children }) {
  // ========================================================== */
  // Start ToDo List Data
  // ========================================================== */

  const [useToDoListAllData, Dispatch] = useReducer(ToDosReducer, []);

  // ========================================================== */
  // End ToDo List Data
  // ========================================================== */

  // ========================================================== */
  // Start Provider
  // ========================================================== */

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

  // ========================================================== */
  // End Provider
  // ========================================================== */
}

// ==========================================================
// End Component Reducer Context Provider
// ==========================================================
