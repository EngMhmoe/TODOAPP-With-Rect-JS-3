// Import React Hooks
import { useState } from "react";

// Import Toast Context
import ToastValue from "./ToastContext";

export default function TostContextProvider({ children }) {
  // Manage Toast Visibility State
  const [toast, setToast] = useState(false);

  // Manage Toast Alert Message
  const [AlertName, setAlertName] = useState("تمت الاضافه");

  // Provide Toast Context Values to Child Components
  return (
    <ToastValue.Provider
      value={{
        toast: toast,
        AlertName: AlertName,
        setToast: setToast,
        setAlertName: setAlertName,
      }}
    >
      {children}
    </ToastValue.Provider>
  );
}
