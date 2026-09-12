import { useState } from "react";

import ToastValue from "./ToastContext";

// ==========================================================
// Start Component Toast Context Provider
// ==========================================================

export default function TostContextProvider({ children }) {
  // ========================================================== */
  // Start Toast States
  // ========================================================== */

  const [toast, setToast] = useState(false);

  const [AlertName, setAlertName] = useState("تمت الاضافه");

  // ========================================================== */
  // End Toast States
  // ========================================================== */

  // ========================================================== */
  // Start Provider
  // ========================================================== */

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

  // ========================================================== */
  // End Provider
  // ========================================================== */
}

// ==========================================================
// End Component Toast Context Provider
// ==========================================================
