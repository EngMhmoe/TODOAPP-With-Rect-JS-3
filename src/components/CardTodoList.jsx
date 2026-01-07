//import Component ToDo
import ToDo from "./ToDo";

//import Component Card In material-UI
import Card from "@mui/material/Card";
//import Component Divider In material-UI
import { Divider } from "@mui/material";

//Component CardTodoList
export default function CardTodoList() {
  return (
    <>
      {/* Start Component CardTodoList UI */}
      <Card sx={{ minWidth: 275 }} className="mt-10 h-150">
        <div className="Card py-3 shadow">
          {/* Title Card CardTodoList*/}
          <h1
            className="text-6xl font-bold text-center"
            style={{ fontFamily: "ui-monospace" }}
          >
            مهامى
          </h1>

          {/* /////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////// */}

          {/* Component Divider */}
          <Divider component="li" />

          {/* /////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////// */}

          {/* Component ToDo */}
          <ToDo />
        </div>
      </Card>
      {/* End Component CardTodoList UI */}
    </>
  );
}
