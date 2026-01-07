//import component TodoList
import TodoList from "./components/TodoList";
//import component Toast
import Toast from "./components/Toast";

//Component App
export default function App() {
  return (
    <>
      {/* Start Component App UI */}
      <div
        className="bg-black w-full h-dvh flex flex-col"
        style={{ direction: "rtl" }}
      >
        {/* Component Tost */}
        <Toast />

        {/* ///////////////////////////////////// */}
        {/* ///////////////////////////////////// */}
        {/* ///////////////////////////////////// */}
        {/* ///////////////////////////////////// */}
        {/* ///////////////////////////////////// */}

        {/* Component ToDoList */}
        <TodoList />
      </div>
      {/* Start Component App UI */}
    </>
  );
}
