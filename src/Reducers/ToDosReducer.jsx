import { v4 as uuidv4 } from "uuid";

// ==========================================================
// Start ToDos Reducer
// ==========================================================

export default function ToDosReducer(CurrentToDos, action) {
  switch (action.type) {
    // ========================================================== */
    // Start Added
    // ========================================================== */

    case "added": {
      const NewToDoListAllData = {
        id: uuidv4(),
        NameToDo: "المهمه",
        details: action.payload.TitleValue,
        isCompleted: false,
      };

      const UpdateUseToDoListAllData = [...CurrentToDos, NewToDoListAllData];

      // Save useToDoListAllData in localStorage
      localStorage.setItem(
        "UseToDoListAllData",
        JSON.stringify(UpdateUseToDoListAllData),
      );

      return UpdateUseToDoListAllData;
    }

    // ========================================================== */
    // End Added
    // ========================================================== */

    // ========================================================== */
    // Start Deleted
    // ========================================================== */

    case "deleted": {
      const FilterDeleteToDo = CurrentToDos.filter((el, i) => {
        return action.payload.SelectIndex !== i;
      });

      // Save useToDoListAllData in localStorage
      localStorage.setItem(
        "UseToDoListAllData",
        JSON.stringify(FilterDeleteToDo),
      );

      return FilterDeleteToDo;
    }

    // ========================================================== */
    // End Deleted
    // ========================================================== */

    // ========================================================== */
    // Start Update
    // ========================================================== */

    case "AddNewToDoUpdate": {
      const Edite = CurrentToDos;

      Edite.splice(
        action.payload.selectIndexUpdate,
        1,
        action.payload.ValueUpdateToDoModal,
      );

      // Save useToDoListAllData in localStorage
      localStorage.setItem("UseToDoListAllData", JSON.stringify(Edite));

      return Edite;
    }

    // ========================================================== */
    // End Update
    // ========================================================== */

    // ========================================================== */
    // Start Completed
    // ========================================================== */

    case "Completed": {
      const UpdateToDo = CurrentToDos.map((el, i) => {
        if (action.payload.selectIndex == i) {
          if (el.isCompleted == false) {
            el.isCompleted = true;
          } else {
            el.isCompleted = false;
          }
        }

        return el;
      });

      // Save useToDoListAllData in localStorage
      localStorage.setItem("UseToDoListAllData", JSON.stringify(UpdateToDo));

      return UpdateToDo;
    }

    // ========================================================== */
    // End Completed
    // ========================================================== */

    // ========================================================== */
    // Start Get Local Storage
    // ========================================================== */

    case "GetInLocalStorage": {
      const StorageUseToDoListAllData =
        JSON.parse(localStorage.getItem("UseToDoListAllData")) ?? [];

      return StorageUseToDoListAllData;
    }

    // ========================================================== */
    // End Get Local Storage
    // ========================================================== */

    // ========================================================== */
    // Start Default
    // ========================================================== */

    default: {
      throw Error("UnKnown Action", action.type);
    }

    // ========================================================== */
    // End Default
    // ========================================================== */
  }
}

// ==========================================================
// End ToDos Reducer
// ==========================================================
