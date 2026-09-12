import { useContext } from "react";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import ToastValue from "../Context/ToastContext";

// ==========================================================
// Start Component Toast
// ==========================================================

export default function Toast() {
  const { toast, AlertName } = useContext(ToastValue);

  return (
    <>
      {/* ========================================================== */}
      {/* Start Toast UI */}
      {/* ========================================================== */}

      <div
        className={
          toast
            ? "fixed top-0 left-1/2 z-[9999] block -translate-x-1/2"
            : "hidden"
        }
      >
        <div
          className="toast mt-5 flex items-center justify-center gap-3 rounded-2xl border px-6 py-3 shadow-2xl"
          style={{
            background: "var(--color-success)",
            color: "var(--color-text)",
            borderColor: "var(--color-border)",
            boxShadow: "0 20px 40px var(--shadow-primary)",
          }}
        >
          <CheckCircleOutlineIcon />

          <h2 className="text-base font-bold sm:text-lg">{AlertName}</h2>
        </div>
      </div>

      {/* ========================================================== */}
      {/* End Toast UI */}
      {/* ========================================================== */}
    </>
  );
}

// ==========================================================
// End Component Toast
// ==========================================================
