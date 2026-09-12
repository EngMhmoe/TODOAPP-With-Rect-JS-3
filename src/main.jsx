import { createRoot } from "react-dom/client";

// ==========================================================
// Start Styling CSS APP
// ==========================================================

import "./index.css";

// ==========================================================
// End Styling CSS APP
// ==========================================================

// ==========================================================
// Start Components
// ==========================================================

import App from "./App.jsx";

// ==========================================================
// End Components
// ==========================================================

// ==========================================================
// Start Context Providers
// ==========================================================

import ReducerContextProvider from "./Context/ReducerContextProvider.jsx";
import TostContextProvider from "./Context/TostContextProvider.jsx";

// ==========================================================
// End Context Providers
// ==========================================================

// ==========================================================
// Start Render App
// ==========================================================

createRoot(document.getElementById("root")).render(
  <ReducerContextProvider>
    <TostContextProvider>
      <App />
    </TostContextProvider>
  </ReducerContextProvider>,
);

// ==========================================================
// End Render App
// ==========================================================
