//import Component HeaderTotoList
import HeaderTotoList from "./HeaderTotoList";
//import Component CardTodoList
import CardTodoList from "../components/CardTodoList";

//import Component Container In material-UI
import { Container } from "@mui/material";

//Component TodoList
export default function TodoList() {
  return (
    <>
      {/* Start Component TodoList UI */}
      <div>
        {" "}
        {/* Component Header */}
        <HeaderTotoList />
        {/* ///////////////////////////////////// */}
        {/* ///////////////////////////////////// */}
        {/* ///////////////////////////////////// */}
        {/* ///////////////////////////////////// */}
        {/* ///////////////////////////////////// */}
        <div className="flex items-center justify-center h-full">
          {/**/}
          {/* Component CardTodoList */}
          <Container maxWidth="md">
            {/**/}
            {/* Component CardTodoList */}
            <CardTodoList />
            {/**/}
          </Container>
          {/**/}
        </div>
      </div>
      {/* End Component TodoList UI */}
    </>
  );
}
