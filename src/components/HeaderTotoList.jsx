// Import React Hooks
import { useContext } from "react";

// Import Material UI Icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

// Import Context
import ReducerContext from "../Context/ReducerContext";

export default function HeaderTotoList() {
  // Get To-Do List Data from Reducer Context
  const { useToDoListAllData } = useContext(ReducerContext);

  // Calculate Total Tasks
  const TotalTasks = useToDoListAllData.length;

  // Calculate Completed Tasks
  const CompletedTasks = useToDoListAllData.filter(
    (todo) => todo.isCompleted === true,
  ).length;

  // Calculate Remaining Tasks
  const RemainingTasks = useToDoListAllData.filter(
    (todo) => todo.isCompleted === false,
  ).length;

  return (
    <>
      {/* ========================================================== */}
      {/* Start Header UI */}
      {/* ========================================================== */}

      <header className="text-center">
        {/* Start Title */}
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <div
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border shadow-lg"
            style={{
              borderColor: "var(--color-border-hover)",
              background:
                "color-mix(in srgb, var(--color-primary) 10%, transparent)",
              boxShadow: "0 10px 25px var(--shadow-primary)",
            }}
          >
            <TaskAltIcon
              sx={{
                fontSize: 34,
                color: "var(--color-primary)",
              }}
            />
          </div>

          <h1
            className="text-4xl font-black tracking-tight sm:text-5xl"
            style={{
              color: "var(--color-text)",
            }}
          >
            Todo List
          </h1>

          <p
            className="mt-3 max-w-lg text-md leading-6 sm:text-xl font-bold opacity-90"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            نظم مهامك، تابع إنجازك، وخلي يومك أكثر إنتاجية.
          </p>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Start Statistics */}
        <div className="mx-auto my-10 grid max-w-2xl grid-cols-3 gap-5 font-bold">
          {/* Start Total */}
          <div
            className="rounded-2xl border p-4"
            style={{
              borderColor: "var(--color-border)",
              background:
                "color-mix(in srgb, var(--color-card) 70%, transparent)",
            }}
          >
            <p
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              الكل
            </p>

            <p
              className="mt-1 text-2xl font-black sm:text-4xl"
              style={{
                color: "var(--color-text)",
              }}
            >
              {TotalTasks}
            </p>
          </div>

          {/* ///////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////// */}

          {/* Start Completed */}
          <div
            className="rounded-2xl border p-4 "
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-success) 15%, transparent)",
              background:
                "color-mix(in srgb, var(--color-success) 5%, transparent)",
            }}
          >
            <div className="flex items-center justify-center gap-1">
              <CheckCircleOutlineIcon
                sx={{
                  fontSize: 16,
                  color: "var(--color-success)",
                }}
              />

              <p
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                مكتملة
              </p>
            </div>

            <p
              className="mt-1 text-2xl font-black sm:text-4xl"
              style={{
                color: "var(--color-success)",
              }}
            >
              {CompletedTasks}
            </p>
          </div>

          {/* ///////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////// */}

          {/* Start Remaining */}
          <div
            className="rounded-2xl border p-4"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-warning) 15%, transparent)",
              background:
                "color-mix(in srgb, var(--color-warning) 5%, transparent)",
            }}
          >
            <div className="flex items-center justify-center gap-1">
              <PendingActionsIcon
                sx={{
                  fontSize: 16,
                  color: "var(--color-warning)",
                }}
              />

              <p
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                متبقية
              </p>
            </div>

            <p
              className="mt-1 text-2xl font-black sm:text-4xl"
              style={{
                color: "var(--color-warning)",
              }}
            >
              {RemainingTasks}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
