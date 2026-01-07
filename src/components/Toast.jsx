//import Hook UseState In React
import { useContext } from "react";

//import Component CheckCircleOutlineIcon In icons-material
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

//import ContextProsvider ToastValue
import ToastValue from "../Context/ToastContext";

//Component Toast
export default function Toast() {
  //InVoke Value is ToastValue ContextProvider
  const { toast, AlertName } = useContext(ToastValue);

  return (
    <>
      {/* Start Component Toast UI */}
      <div className={toast ? "flex" : "hidden"}>
        <div className="toast px-5 py-2 rounded flex items-center justify-center gap-1 bg-green-600 text-white">
          {/**/}
          {/* Component CheckCircleOutlineIcon In icons-material */}
          <CheckCircleOutlineIcon className="" />
          {/**/}

          {/* ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// */}

          <h2 className="text-xl font-bold font-serif">{AlertName}</h2>
        </div>
      </div>
      {/* End Component Toast UI */}
    </>
  );
}
