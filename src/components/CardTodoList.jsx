// Import Components
import ToDo from "./ToDo";

// Import Material UI Components
import Card from "@mui/material/Card";

export default function CardTodoList() {
  return (
    <>
      {/* ========================================================== */}
      {/* Start CardTodoList UI */}
      {/* ========================================================== */}

      <Card
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
          overflow: "visible",
        }}
      >
        <div
          className="rounded-4xl border p-4 sm:p-6 shadow-2xl"
          style={{
            background: "var(--color-card)",
            borderColor: "var(--color-border)",
            boxShadow: "0 20px 50px var(--shadow-card)",
          }}
        >
          {/* Start Card Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2
                className="text-2xl font-black sm:text-3xl"
                style={{
                  color: "var(--color-text)",
                }}
              >
                مهامي
              </h2>

              <p
                className="mt-1 font-bold text-lg"
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                أضف مهامك وابدأ في إنجازها
              </p>
            </div>

            <div
              className="flex h-12 w-12 text-3xl font-extrabold items-center justify-center rounded-full"
              style={{
                background:
                  "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                color: "var(--color-primary)",
              }}
            >
              ✓
            </div>
          </div>

          {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

          {/* Start ToDo */}
          <ToDo />
        </div>
      </Card>
    </>
  );
}
