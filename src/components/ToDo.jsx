//import Component In material-UI
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import {
  Card,
  Button,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

//import Hooks in React
import React, { useContext, useEffect, useState } from "react";

//import uuid in id عشوائى
import { v4 as uuidv4 } from "uuid";

//import ContextProvider ToastValue
import ToastValue from "../Context/ToastContext";
//import ContextProvider ReducerContext
import ReducerContext from "../Context/ReducerContext";

{
  /* /////////////////////////////////////////////////////////////////////// */
}
{
  /* /////////////////////////////////////////////////////////////////////// */
}
{
  /* /////////////////////////////////////////////////////////////////////// */
}
{
  /* /////////////////////////////////////////////////////////////////////// */
}
{
  /* /////////////////////////////////////////////////////////////////////// */
}

//Component ToDo
export default function ToDo() {
  //InVoke Value is ReducerContext ContextProvider
  const { useToDoListAllData, Dispatch } = useContext(ReducerContext);

  //InVoke Value is ToastValue ContextProvider
  const { setToast, setAlertName } = useContext(ToastValue);
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  //Add New ToDO(1)

  //AddNewToDo IN useToDoListAllData Arrays
  const [ValueNewToDo, setValueNewToDo] = useState("");

  //CheckedValueInput UI
  const [CheckedValueInput, setCheckedValueInput] = useState({
    error: false,
    label: "عنوان المهمه",
  });

  //function AddNewToDo
  function AddNewToDo() {
    if (ValueNewToDo === "") {
      setCheckedValueInput({ error: true, label: "خطأ" });
      return;
    }

    //Insert Data of Actions from function ToDosReducer
    Dispatch({
      type: "added",
      payload: { TitleValue: ValueNewToDo },
    });

    //CheckedValueInput UI
    setCheckedValueInput({ error: false, label: "عنوان المهمه" });

    //Clear Data OF ValueNewToDo
    setValueNewToDo("");

    //Show Toast
    setToast(true);
    //Hidden Toast
    setTimeout(() => {
      setToast(false);
    }, 2000);
  }

  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  //Delete ToDO(2)

  //function DeleteToDo
  function DeleteToDo() {
    //Show Modal DeleteToDo
    handleClose();

    //Insert Data of Actions from function ToDosReducer
    Dispatch({ type: "deleted", payload: { SelectIndex: open.select } });

    //Show Toast
    setToast(true);
    //Hidden Tost
    setTimeout(() => {
      setToast(false);
    }, 2000);

    //Change title Tost UI
    setAlertName("تم الحزف بنجاح");
  }

  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  //Update ToDO(3)

  //Update ToDO Data IN Modal
  const [ValueUpdateToDoModal, setValueUpdateToDoModal] = useState({});

  //Function Update ToDO
  function UpDAteToDO(selectIndex) {
    //Show Modal UpdateToDo
    handleClickOpen2();

    //NewObjectUpdateToDoModal
    const NewObjectUpdateToDoModal = {
      id: uuidv4(),
      NameToDo: useToDoListAllData[selectIndex].NameToDo,
      details: useToDoListAllData[selectIndex].details,
      isCompleted: false,
    };

    //insert NewObjectUpdateToDoModal TO ValueUpdateToDoModal
    setValueUpdateToDoModal(NewObjectUpdateToDoModal);

    //insert selectIndex TO selectIndexUpdate State
    setSelectIndexUpdate(selectIndex);
  }

  //Select Index onclick Update ToDo
  const [selectIndexUpdate, setSelectIndexUpdate] = useState(null);

  //Function AddNewToDoUpdate TO TODO
  function AddNewToDoUpdate() {
    //Insert Data of Actions from function ToDosReducer
    Dispatch({
      type: "AddNewToDoUpdate",
      payload: {
        selectIndexUpdate: selectIndexUpdate,
        ValueUpdateToDoModal: ValueUpdateToDoModal,
      },
    });

    //Show Toast
    setToast(true);
    //Hidden Toast
    setTimeout(() => {
      setToast(false);
    }, 2000);

    //Change title Tost UI
    setAlertName("تم العديل بنجاح");
  }

  //AlertDialogSlide in show modal Update
  const [open2, setOpen2] = useState({ is: false, select: "" });

  const handleClickOpen2 = (selectIndex) => {
    setOpen2({ ...open2, is: true, select: selectIndex });
  };

  const handleClose2 = () => {
    AddNewToDoUpdate();
    setOpen2(false);
  };

  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  //Completed ToDO(3)

  //Function Completed
  function Completed(selectIndex) {
    //Insert Data of Actions from function ToDosReducer
    Dispatch({
      type: "Completed",
      payload: { selectIndex: selectIndex },
    });

    //Show Toast
    setToast(true);
    //Hidden Toast
    setTimeout(() => {
      setToast(false);
    }, 2000);

    setAlertName("تم العديل بنجاح");
  }

  //AlertDialogSlide in show modal Delete
  const [open, setOpen] = useState({ is: false, select: "" });

  //ShowModalDeleteToDo
  function ShowModalDeleteToDo(selectIndex) {
    handleClickOpen(selectIndex);
  }

  const handleClickOpen = (selectIndex) => {
    setOpen({ ...open, is: true, select: selectIndex });
  };

  const handleClose = () => {
    setOpen(false);
  };

  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  //localStorage getItem from Reducer  With UseEffect
  useEffect(() => {
    //Insert Data of Actions from function ToDosReducer
    Dispatch({
      type: "GetInLocalStorage",
    });
  }, []);

  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  // displayedToDosType
  // TodosToBeRendered

  //(1) Check is completed
  const [displayedToDosType, setDisplayedToDosType] = useState("all");

  //(2) Copy useToDoListAllData && Filter is Completed ALL
  let TodosToBeRendered = useToDoListAllData;

  //(3) Filter IS Completed
  const FilterCompleted = useToDoListAllData.filter((el) => {
    return el.isCompleted === true;
  });

  //(4) Filter IS Non-Completed
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

  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  return (
    <>
      {/* Start Component ToDO UI */}
      <div className="flex flex-col h-119 justify-between">
        {/* Filter Buttons UI */}
        <div
          className="flex justify-center items-center mt-5"
          style={{ direction: "ltr" }}
        >
          <ToggleButtonGroup
            color="primary"
            exclusive
            aria-label="Platform"
            value={displayedToDosType}
            onChange={(e) => setDisplayedToDosType(e.target.value)}
          >
            <div className="flex flex-row-reverse gap-3">
              <ToggleButton
                style={
                  displayedToDosType === "all"
                    ? {
                        backgroundColor: "rebeccapurple",
                        color: "white",
                        fontSize: "22px",
                        fontWeight: "bold",
                        fontFamily: "fantasy",
                      }
                    : {}
                }
                value={"all"}
              >
                الكل
              </ToggleButton>
              {/* //////////////////// */}
              {/* //////////////////// */}
              <ToggleButton
                value={"completed"}
                style={
                  displayedToDosType === "completed"
                    ? {
                        backgroundColor: "rebeccapurple",
                        color: "white",
                        fontSize: "22px",
                        fontWeight: "bold",
                        fontFamily: "fantasy",
                      }
                    : {}
                }
              >
                منجز
              </ToggleButton>
              {/* //////////////////// */}
              {/* //////////////////// */}
              <ToggleButton
                value={"non-completed"}
                style={
                  displayedToDosType === "non-completed"
                    ? {
                        backgroundColor: "rebeccapurple",
                        color: "white",
                        fontSize: "22px",
                        fontWeight: "bold",
                        fontFamily: "fantasy",
                      }
                    : {}
                }
              >
                غير منجز
              </ToggleButton>
            </div>
          </ToggleButtonGroup>
        </div>
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}{" "}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}{" "}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}{" "}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}{" "}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* Start To Do */}
        <Container maxWidth="md" className=" my-10 ">
          <Card sx={{ minWidth: 275 }} className="flex flex-col gap-7">
            {/* The To Do */}
            {TodosToBeRendered.map((ToDo, i) => (
              <CardContent
                // style={{}}
                key={i}
                // style={{ maxWidth: "120vh", overflowX: "scroll" }}
                className="ToDo duration-2000 bg-sky-900 text-white shadow flex flex-row-reverse justify-between items-center gap-30 overflow-x-scroll"
              >
                {/* icons */}
                <Stack direction="row" justifyContent={"end"} gap={1}>
                  {/* Delete Icon */}
                  <div
                    className="Icons bg-red-100/90 rounded-4xl hover:scale-110"
                    onClick={() => ShowModalDeleteToDo(i)}
                  >
                    <IconButton size="medium">
                      <DeleteOutlineIcon className="text-red-500" />
                    </IconButton>
                  </div>

                  {/* Update Icon */}
                  <div
                    className="Icons bg-blue-100/90 rounded-4xl hover:scale-110"
                    onClick={() => UpDAteToDO(i)}
                  >
                    {" "}
                    <IconButton size="medium">
                      <CreateIcon className="text-blue-700" />
                    </IconButton>
                  </div>

                  {/* Comp Icon */}
                  <div
                    className={
                      ToDo.isCompleted
                        ? "Icons bg-green-700  rounded-4xl hover:scale-110"
                        : "Icons bg-green-100/90 rounded-4xl hover:scale-110"
                    }
                    onClick={() => Completed(i)}
                  >
                    {" "}
                    <IconButton size="medium">
                      <CheckIcon
                        className={
                          ToDo.isCompleted ? "text-white" : "text-green-700"
                        }
                      />
                    </IconButton>
                  </div>
                </Stack>
                {/* /////////////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////////////// */}
                {/* Name To do */}
                <div className="font-bold text-2xl flex flex-col gap-2">
                  <h1
                    className={
                      ToDo.isCompleted
                        ? "flex items-center gap-0.5 "
                        : "flex items-center gap-0.5 text-[25px] sm:text-3xl"
                    }
                    style={
                      ToDo.isCompleted
                        ? { textDecoration: "line-through" }
                        : {
                            textDecoration: "none",
                            fontFamily: "initial",
                          }
                    }
                  >
                    {ToDo.NameToDo}{" "}
                    <span
                      className="text-4xl text-green-400"
                      style={{ fontFamily: "ui-rounded" }}
                    >
                      {i + 1}
                    </span>
                  </h1>
                  <p
                    style={{
                      fontFamily: "monospace",

                      fontWeight: "500",
                    }}
                  >
                    {ToDo.details}
                  </p>
                </div>
              </CardContent>
            ))}
          </Card>
        </Container>
        {/* End To Do */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* Start Add New To Do List */}
        <Container
          maxWidth="md"
          className="flex flex-row-reverse justify-between items-center gap-5 "
        >
          <Button
            style={{
              backgroundColor: "rebeccapurple",
              color: "white",
              fontSize: "25px",
              fontWeight: "bold",
              paddingInline: "60px",
            }}
            onClick={() => AddNewToDo()}
            id="btnAdd"
            className="hover:scale-105"
          >
            اضافه
          </Button>
          {/* /////////////////////////////// */}
          {/* /////////////////////////////// */}
          {/* /////////////////////////////// */}
          {/* /////////////////////////////// */}
          {/* /////////////////////////////// */}
          {ValueNewToDo === "" ? (
            <TextField
              error={CheckedValueInput.error}
              label={CheckedValueInput.label}
              multiline
              className="w-full"
              value={ValueNewToDo}
              onChange={(e) => setValueNewToDo(e.target.value)}
            />
          ) : (
            <TextField
              error={false}
              label="عنوان المهمه"
              multiline
              className="w-full"
              value={ValueNewToDo}
              onChange={(e) => setValueNewToDo(e.target.value)}
            />
          )}
        </Container>
        {/* End Add New To Do List */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* Start Show Models */}
        {/* Show Model(1) is Delete (Ok OR Not Ok) */}
        <React.Fragment>
          <Dialog
            open={open.is}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            style={{ direction: "rtl" }}
          >
            <DialogTitle
              id="alert-dialog-title"
              className="bg-slate-900 text-white"
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                fontFamily: "fangsong",
              }}
            >
              {"هل انتا متأكد من رغبتك فى حزف المهمه؟"}
            </DialogTitle>

            {/* ///////////////////////// */}
            {/* ///////////////////////// */}

            <DialogContent className="bg-slate-900">
              <DialogContentText
                id="alert-dialog-description"
                style={{
                  color: "white",
                  fontSize: "23px",
                  fontFamily: "fangsong",
                }}
              >
                لأ يمكن التراجع عن الحزف فى حال أختيار زر [الحزف]
              </DialogContentText>
            </DialogContent>

            {/* ///////////////////////// */}
            {/* ///////////////////////// */}

            <DialogActions className="bg-slate-950 flex items-center gap-5">
              <Button
                onClick={handleClose}
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                اغلاق
              </Button>
              <Button
                onClick={() => DeleteToDo()}
                autoFocus
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                نعم قم بالحزف
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* Show Model(2) is Update */}
        <React.Fragment>
          <Dialog
            open={open2.is}
            onClose={handleClose2}
            style={{ direction: "rtl" }}
          >
            <h1
              className="text-4xl text-start px-6 pt-5 font-bold"
              style={{ fontFamily: "fangsong" }}
            >
              تعديل المهمه
            </h1>

            {/* //////////// */}
            {/* //////////// */}

            <DialogTitle
              style={{ cursor: "move" }}
              id="draggable-dialog-title"
            ></DialogTitle>
            <DialogContent className="flex flex-col gap-7">
              {/*  */}
              <DialogContentText>
                {" "}
                <TextField
                  color="error"
                  id="standard-basic"
                  label="العنوان"
                  variant="standard"
                  style={{
                    width: "500px",
                  }}
                  value={ValueUpdateToDoModal.NameToDo}
                  onChange={(e) =>
                    setValueUpdateToDoModal({
                      ...ValueUpdateToDoModal,
                      NameToDo: e.target.value,
                    })
                  }
                />
              </DialogContentText>

              {/* //////////////// */}
              {/* //////////////// */}

              {/*  */}
              <TextField
                color="error"
                id="standard-basic"
                label="التفاصيل"
                variant="standard"
                style={{
                  width: "500px",
                }}
                value={ValueUpdateToDoModal.details}
                onChange={(e) =>
                  setValueUpdateToDoModal({
                    ...ValueUpdateToDoModal,
                    details: e.target.value,
                  })
                }
              />
            </DialogContent>
            <DialogActions className="flex gap-5">
              {/*  */}
              <Button
                autoFocus
                onClick={handleClose2}
                style={{ fontSize: "30px", fontWeight: "bold" }}
              >
                الغاء
              </Button>

              {/* //////////////// */}
              {/* //////////////// */}

              {/*  */}
              <Button
                onClick={handleClose2}
                style={{ fontSize: "30px", fontWeight: "bold" }}
              >
                تأكيد
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* End Show Models */}
      </div>
      {/* End Component ToDO UI */}
    </>
  );
}
