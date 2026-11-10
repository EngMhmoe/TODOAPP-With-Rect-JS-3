// ==========================================================
// Start Components
// ==========================================================
import TodoList from "./components/TodoList";
import Toast from "./components/Toast";

export default function App() {
  return (
    <div
      className="min-h-dvh w-full"
      style={{
        direction: "rtl",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* Start Toast */}
      <Toast />

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Start Todo List */}
      <TodoList />
    </div>
  );
}
