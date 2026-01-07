import { useState } from "react";
import ToastValue from "./ToastContext";

export default function TostContextProvider({ children }) {
  const [toast, setToast] = useState(false);

  const [AlertName, setAlertName] = useState("تمت الاضافه");

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
