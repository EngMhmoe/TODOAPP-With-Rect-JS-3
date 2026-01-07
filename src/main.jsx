import { createRoot } from "react-dom/client";

//import Styling CSS APP
import "./index.css";

//import component App
import App from "./App.jsx";

//import ContextProvider
import ReducerContextProvider from "./Context/ReducerContextProvider.jsx";
import TostContextProvider from "./Context/TostContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ReducerContextProvider>
    <TostContextProvider>
      <App />
    </TostContextProvider>
  </ReducerContextProvider>
);
