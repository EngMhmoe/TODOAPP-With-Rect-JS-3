import { createRoot } from "react-dom/client";

// Start Styling CSS APP
import "./index.css";

// Start Components
import App from "./App.jsx";

// Start Context Providers
import ReducerContextProvider from "./Context/ReducerContextProvider.jsx";
import TostContextProvider from "./Context/TostContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ReducerContextProvider>
    <TostContextProvider>
      <App />
    </TostContextProvider>
  </ReducerContextProvider>,
);
