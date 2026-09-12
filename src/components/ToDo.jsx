import IconButton from "@mui/material/IconButton";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import React, { useContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import ToastValue from "../Context/ToastContext";
import ReducerContext from "../Context/ReducerContext";

// ==========================================================
// Start Component ToDo
// ==========================================================

export default function ToDo() {
  // ==========================================================
  // Start Context
  // ==========================================================

  const { useToDoListAllData, Dispatch } = useContext(ReducerContext);

  const { setToast, setAlertName } = useContext(ToastValue);

  // ==========================================================
  // End Context
  // ==========================================================

  // ==========================================================
  // Start Add ToDo States
  // ==========================================================

  const [ValueNewToDo, setValueNewToDo] = useState("");

  const [CheckedValueInput, setCheckedValueInput] = useState({
    error: false,
    label: "تفاصيل المهمه",
  });

  // ==========================================================
  // End Add ToDo States
  // ==========================================================

  // ==========================================================
  // Start Add New ToDo
  // ==========================================================

  function AddNewToDo() {
    if (ValueNewToDo === "") {
      setCheckedValueInput({
        error: true,
        label: "يرجى اضافه مهمه جديده",
      });

      return;
    }

    Dispatch({
      type: "added",
      payload: {
        TitleValue: ValueNewToDo,
      },
    });

    setCheckedValueInput({
      error: false,
      label: "تفاصيل المهمه",
    });

    setValueNewToDo("");

    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);
  }

  // ==========================================================
  // End Add New ToDo
  // ==========================================================

  // ==========================================================
  // Start Delete ToDo States
  // ==========================================================

  const [open, setOpen] = useState({
    is: false,
    select: "",
  });

  // ==========================================================
  // End Delete ToDo States
  // ==========================================================

  // ==========================================================
  // Start Delete ToDo
  // ==========================================================

  function ShowModalDeleteToDo(selectIndex) {
    handleClickOpen(selectIndex);
  }

  const handleClickOpen = (selectIndex) => {
    setOpen({
      ...open,
      is: true,
      select: selectIndex,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  function DeleteToDo() {
    handleClose();

    Dispatch({
      type: "deleted",
      payload: {
        SelectIndex: open.select,
      },
    });

    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);

    setAlertName("تم الحزف بنجاح");
  }

  // ==========================================================
  // End Delete ToDo
  // ==========================================================

  // ==========================================================
  // Start Update ToDo States
  // ==========================================================

  const [ValueUpdateToDoModal, setValueUpdateToDoModal] = useState({});

  const [selectIndexUpdate, setSelectIndexUpdate] = useState(null);

  const [open2, setOpen2] = useState({
    is: false,
    select: "",
  });

  // ==========================================================
  // End Update ToDo States
  // ==========================================================

  // ==========================================================
  // Start Update ToDo
  // ==========================================================

  function UpDAteToDO(selectIndex) {
    handleClickOpen2();

    const NewObjectUpdateToDoModal = {
      id: uuidv4(),
      NameToDo: useToDoListAllData[selectIndex].NameToDo,
      details: useToDoListAllData[selectIndex].details,
      isCompleted: false,
    };

    setValueUpdateToDoModal(NewObjectUpdateToDoModal);

    setSelectIndexUpdate(selectIndex);
  }

  const handleClickOpen2 = (selectIndex) => {
    setOpen2({
      ...open2,
      is: true,
      select: selectIndex,
    });
  };

  function AddNewToDoUpdate() {
    Dispatch({
      type: "AddNewToDoUpdate",
      payload: {
        selectIndexUpdate: selectIndexUpdate,
        ValueUpdateToDoModal: ValueUpdateToDoModal,
      },
    });

    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);

    setAlertName("تم العديل بنجاح");
  }

  const handleClose2 = () => {
    AddNewToDoUpdate();

    setOpen2(false);
  };

  // ==========================================================
  // End Update ToDo
  // ==========================================================

  // ==========================================================
  // Start Completed
  // ==========================================================

  function Completed(selectIndex) {
    Dispatch({
      type: "Completed",
      payload: {
        selectIndex: selectIndex,
      },
    });

    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);

    setAlertName("تم تحديث حالة المهمة بنجاح");
  }

  // ==========================================================
  // End Completed
  // ==========================================================

  // ==========================================================
  // Start Local Storage
  // ==========================================================

  useEffect(() => {
    Dispatch({
      type: "GetInLocalStorage",
    });
  }, []);

  // ==========================================================
  // End Local Storage
  // ==========================================================

  // ==========================================================
  // Start Filter
  // ==========================================================

  const [displayedToDosType, setDisplayedToDosType] = useState("all");

  let TodosToBeRendered = useToDoListAllData;

  const FilterCompleted = useToDoListAllData.filter((el) => {
    return el.isCompleted === true;
  });

  const FilterNonCompleted = useToDoListAllData.filter((el) => {
    return el.isCompleted === false;
  });

  if (displayedToDosType === "completed") {
    TodosToBeRendered = FilterCompleted;
  } else if (displayedToDosType === "non-completed") {
    TodosToBeRendered = FilterNonCompleted;
  } else {
    TodosToBeRendered;
  }

  // ==========================================================
  // End Filter
  // ==========================================================

  // ==========================================================
  // Start Filter Change
  // ==========================================================

  const handleFilterChange = (event, newValue) => {
    if (newValue !== null) {
      setDisplayedToDosType(newValue);
    }
  };

  // ==========================================================
  // End Filter Change
  // ==========================================================

  return (
    <>
      {/* ========================================================== */}
      {/* Start ToDo UI */}
      {/* ========================================================== */}
      <div className="space-y-6">
        {/* ========================================================== */}
        {/* Start Add ToDo */}
        {/* ========================================================== */}

        <div
          className="rounded-2xl border p-3 sm:p-4 shadow-inner"
          style={{
            background: "color-mix(in srgb, var(--color-bg) 55%, transparent)",
            borderColor: "var(--color-border)",
            boxShadow: "inset 0 1px 15px var(--shadow-card)",
          }}
        >
          <div className="flex flex-col-reverse gap-4 sm:flex-row-reverse">
            <Button
              onClick={() => AddNewToDo()}
              id="btnAdd"
              variant="contained"
              startIcon={<AddIcon className="ml-1" />}
              sx={{
                minHeight: "54px",
                minWidth: {
                  xs: "100%",
                  sm: "135px",
                },
                borderRadius: "15px",
                background: "var(--gradient-primary)",
                color: "var(--color-text)",
                fontWeight: 900,
                fontSize: "22px",
                boxShadow: "0 10px 30px var(--shadow-primary)",

                "&:hover": {
                  background: "var(--gradient-primary)",
                  filter: "brightness(1.1)",
                },
              }}
            >
              إضافة
            </Button>

            <TextField
              fullWidth
              error={CheckedValueInput.error}
              label={CheckedValueInput.label}
              multiline
              minRows={1}
              value={ValueNewToDo}
              onChange={(e) => setValueNewToDo(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  background: "var(--color-input)",
                  color: "var(--color-text)",

                  "& fieldset": {
                    borderColor: "var(--color-border)",
                  },

                  "&:hover fieldset": {
                    borderColor: "var(--color-border-hover)",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "var(--color-primary)",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "var(--color-text-muted)",
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "var(--color-primary)",
                },
              }}
            />
          </div>
        </div>

        {/* ========================================================== */}
        {/* End Add ToDo */}
        {/* ========================================================== */}

        {/* ========================================================== */}
        {/* Start Filters */}
        {/* ========================================================== */}

        <div className="flex justify-center">
          <ToggleButtonGroup
            value={displayedToDosType}
            exclusive
            onChange={handleFilterChange}
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              background: "var(--color-input)",
              border: "1px solid var(--color-border)",
              borderRadius: "15px",
              overflow: "hidden",

              "& .MuiToggleButton-root": {
                border: "none",
                borderLeft: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
                fontWeight: 900,
                fontSize: "16px",
                padding: "11px 5px",

                "&.Mui-selected": {
                  background:
                    "color-mix(in srgb, var(--color-primary) 16%, transparent)",
                  color: "var(--color-primary)",
                },

                "&:hover": {
                  background:
                    "color-mix(in srgb, var(--color-text) 4%, transparent)",
                },
              },
            }}
          >
            <ToggleButton value="all">الكل</ToggleButton>

            <ToggleButton value="completed">المكتملة</ToggleButton>

            <ToggleButton value="non-completed">المتبقية</ToggleButton>
          </ToggleButtonGroup>
        </div>

        {/* ========================================================== */}
        {/* End Filters */}
        {/* ========================================================== */}

        {/* ========================================================== */}
        {/* Start Todo List */}
        {/* ========================================================== */}

        <div className="space-y-6">
          {TodosToBeRendered.length === 0 ? (
            <div
              className="rounded-3xl border-4 border-dashed px-5 py-12 text-center"
              style={{
                borderColor: "var(--color-border)",
                background:
                  "color-mix(in srgb, var(--color-card) 40%, transparent)",
              }}
            >
              <div
                className="text-4xl font-extrabold mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  background:
                    "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                  color: "var(--color-primary)",
                }}
              >
                ✓
              </div>

              <h3
                className="mt-6 sm:text-3xl text-2xl font-extrabold"
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                لا توجد مهام
              </h3>

              <p
                className="mt-3 sm:text-lg text-sm"
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                أضف مهمة جديدة وابدأ في تنظيم يومك.
              </p>
            </div>
          ) : (
            TodosToBeRendered.map((ToDo, i) => (
              <div
                key={i}
                className="todo-card group flex flex-col gap-5 rounded-3xl border-2 p-4 shadow-2xl sm:flex-row sm:items-center sm:justify-between"
                style={{
                  background: ToDo.isCompleted
                    ? "color-mix(in srgb, var(--color-success) 4%, var(--color-card))"
                    : "var(--color-card)",
                  borderColor: ToDo.isCompleted
                    ? "color-mix(in srgb, var(--color-success) 15%, var(--color-border))"
                    : "var(--color-border)",
                }}
              >
                {/* ========================================================== */}
                {/* Start Todo Content */}
                {/* ========================================================== */}

                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: ToDo.isCompleted
                          ? "var(--color-success)"
                          : "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                        color: ToDo.isCompleted
                          ? "var(--color-text)"
                          : "var(--color-primary)",
                      }}
                    >
                      {ToDo.isCompleted ? "✓" : i + 1}
                    </div>

                    <div className="min-w-0">
                      <h3
                        className={`break-words text-lg font-extrabold sm:text-2xl ${
                          ToDo.isCompleted ? "line-through" : ""
                        }`}
                        style={{
                          color: ToDo.isCompleted
                            ? "var(--color-text-muted)"
                            : "var(--color-text)",
                        }}
                      >
                        {ToDo.NameToDo}
                      </h3>

                      <p
                        className={`mt-1.5 break-words text-md leading-6 ${
                          ToDo.isCompleted ? "line-through" : ""
                        }`}
                        style={{
                          color: ToDo.isCompleted
                            ? "var(--color-text-muted)"
                            : "var(--color-text-secondary)",
                        }}
                      >
                        {ToDo.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ========================================================== */}
                {/* End Todo Content */}
                {/* ========================================================== */}

                {/* ========================================================== */}
                {/* Start Todo Actions */}
                {/* ========================================================== */}

                <div className="flex shrink-0 items-center justify-end gap-6">
                  {/* ========================================================== */}
                  {/* Start Complete */}
                  {/* ========================================================== */}

                  <div
                    className="todo-action rounded-xl"
                    style={{
                      background: ToDo.isCompleted
                        ? "var(--color-success)"
                        : "color-mix(in srgb, var(--color-success) 10%, transparent)",
                      color: ToDo.isCompleted
                        ? "var(--color-text)"
                        : "var(--color-success)",
                    }}
                    onClick={() => Completed(i)}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        color: "inherit",
                      }}
                    >
                      <CheckIcon
                        sx={{
                          fontSize: "30px",
                        }}
                      />
                    </IconButton>
                  </div>

                  {/* ========================================================== */}
                  {/* End Complete */}
                  {/* ========================================================== */}

                  {/* ========================================================== */}
                  {/* Start Update */}
                  {/* ========================================================== */}

                  <div
                    className="todo-action rounded-xl"
                    style={{
                      background:
                        "color-mix(in srgb, var(--color-secondary) 10%, transparent)",
                      color: "var(--color-secondary)",
                    }}
                    onClick={() => UpDAteToDO(i)}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        color: "inherit",
                      }}
                    >
                      <CreateIcon
                        sx={{
                          fontSize: "30px",
                        }}
                      />
                    </IconButton>
                  </div>

                  {/* ========================================================== */}
                  {/* End Update */}
                  {/* ========================================================== */}

                  {/* ========================================================== */}
                  {/* Start Delete */}
                  {/* ========================================================== */}

                  <div
                    className="todo-action rounded-xl"
                    style={{
                      background:
                        "color-mix(in srgb, var(--color-danger) 10%, transparent)",
                      color: "var(--color-danger)",
                    }}
                    onClick={() => ShowModalDeleteToDo(i)}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        color: "inherit",
                      }}
                    >
                      <DeleteOutlineIcon
                        sx={{
                          fontSize: "30px",
                        }}
                      />
                    </IconButton>
                  </div>

                  {/* ========================================================== */}
                  {/* End Delete */}
                  {/* ========================================================== */}
                </div>

                {/* ========================================================== */}
                {/* End Todo Actions */}
                {/* ========================================================== */}
              </div>
            ))
          )}
        </div>

        {/* ========================================================== */}
        {/* End Todo List */}
        {/* ========================================================== */}

        {/* ========================================================== */}
        {/* Start Delete Dialog */}
        {/* ========================================================== */}

        <Dialog
          dir="rtl"
          open={open.is}
          onClose={handleClose}
          className="todo-dialog"
          PaperProps={{
            sx: {
              width: "100%",
              maxWidth: "600px",
              borderRadius: "20px",
              background: "var(--color-card)",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
            },
          }}
        >
          <DialogTitle
            sx={{
              fontSize: "27px",
              fontWeight: 900,
              color: "var(--color-text)",
            }}
          >
            هل أنت متأكد من رغبتك في حذف المهمة؟
          </DialogTitle>

          <DialogContent>
            <DialogContentText
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                color: "var(--color-text-muted)",
              }}
            >
              لا يمكن التراجع عن الحذف في حال اختيار زر الحذف.
            </DialogContentText>
          </DialogContent>

          <DialogActions
            sx={{
              padding: "16px 24px 20px",
              gap: "8px",
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                color: "var(--color-text-secondary)",
                fontSize: "20px",
                fontWeight: 900,
              }}
            >
              إغلاق
            </Button>

            <Button
              onClick={() => DeleteToDo()}
              variant="contained"
              autoFocus
              sx={{
                fontSize: "20px",
                fontWeight: 900,
                borderRadius: "10px",
                background: "var(--color-danger)",
                color: "var(--color-text)",

                "&:hover": {
                  background: "var(--color-danger)",
                  filter: "brightness(0.85)",
                },
              }}
            >
              نعم، قم بالحذف
            </Button>
          </DialogActions>
        </Dialog>

        {/* ========================================================== */}
        {/* End Delete Dialog */}
        {/* ========================================================== */}

        {/* ========================================================== */}
        {/* Start Update Dialog */}
        {/* ========================================================== */}

        <Dialog
          dir="rtl"
          open={open2.is}
          onClose={handleClose2}
          className="todo-dialog"
          PaperProps={{
            sx: {
              width: "100%",
              maxWidth: "600px",
              borderRadius: "20px",
              background: "var(--color-card)",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
              padding: "8px",
            },
          }}
        >
          <DialogTitle
            sx={{
              fontSize: "30px",
              fontWeight: 900,
              color: "var(--color-text)",
            }}
          >
            تعديل المهمة
          </DialogTitle>

          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              paddingTop: "15px !important",
            }}
          >
            <TextField
              color="secondary"
              label="عنوان المهمه"
              variant="outlined"
              fullWidth
              value={ValueUpdateToDoModal.NameToDo ?? ""}
              onChange={(e) =>
                setValueUpdateToDoModal({
                  ...ValueUpdateToDoModal,
                  NameToDo: e.target.value,
                })
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "var(--color-text)",
                  borderRadius: "12px",
                  background: "var(--color-input)",

                  "& fieldset": {
                    borderColor: "var(--color-border)",
                  },

                  "&:hover fieldset": {
                    borderColor: "var(--color-border-hover)",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "var(--color-primary)",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "var(--color-text-muted)",
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "var(--color-primary)",
                },

                "& .MuiInputBase-input": {
                  color: "var(--color-text)",
                },
              }}
            />

            <TextField
              color="secondary"
              label="تفاصيل المهمه"
              variant="outlined"
              fullWidth
              multiline
              minRows={3}
              value={ValueUpdateToDoModal.details ?? ""}
              onChange={(e) =>
                setValueUpdateToDoModal({
                  ...ValueUpdateToDoModal,
                  details: e.target.value,
                })
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "var(--color-text)",
                  borderRadius: "12px",
                  background: "var(--color-input)",

                  "& fieldset": {
                    borderColor: "var(--color-border)",
                  },

                  "&:hover fieldset": {
                    borderColor: "var(--color-border-hover)",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "var(--color-primary)",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "var(--color-text-muted)",
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "var(--color-primary)",
                },

                "& .MuiInputBase-input": {
                  color: "var(--color-text)",
                },
              }}
            />
          </DialogContent>

          <DialogActions
            sx={{
              gap: "8px",
              padding: "16px",
            }}
          >
            <Button
              autoFocus
              onClick={handleClose2}
              sx={{
                color: "var(--color-text-secondary)",
                fontSize: "20px",
                fontWeight: 900,
              }}
            >
              إلغاء
            </Button>

            <Button
              onClick={handleClose2}
              variant="contained"
              sx={{
                borderRadius: "10px",
                background: "var(--gradient-primary)",
                color: "var(--color-text)",
                fontSize: "20px",
                fontWeight: 900,

                "&:hover": {
                  background: "var(--gradient-primary)",
                  filter: "brightness(1.1)",
                },
              }}
            >
              تأكيد التعديل
            </Button>
          </DialogActions>
        </Dialog>

        {/* ========================================================== */}
        {/* End Update Dialog */}
        {/* ========================================================== */}
      </div>

      {/* ========================================================== */}
      {/* End ToDo UI */}
      {/* ========================================================== */}
    </>
  );
}

// ==========================================================
// End Component ToDo
// ==========================================================
