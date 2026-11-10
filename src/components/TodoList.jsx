// Import Components
import HeaderTotoList from "./HeaderTotoList";
import CardTodoList from "./CardTodoList";

// Import Material UI Components
import { Container } from "@mui/material";

export default function TodoList() {
  return (
    <>
      {/* ========================================================== */}
      {/* Start TodoList UI */}
      {/* ========================================================== */}
      <main
        className="min-h-dvh w-full px-0 py-8 sm:px-6 lg:px-8"
        style={{
          background: "var(--gradient-background)",
        }}
      >
        {/* Start Container */}
        <Container maxWidth="lg">
          {/* Start Header */}
          <HeaderTotoList />

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* Start Card */}
          <div>
            <CardTodoList />
          </div>
        </Container>
      </main>
    </>
  );
}
