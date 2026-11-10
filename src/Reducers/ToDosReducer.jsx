// Import UUID Generator
import { v4 as uuidv4 } from "uuid";

export default function ToDosReducer(CurrentToDos, action) {
  switch (action.type) {
    case "added": {
      // Create New To-Do Task
      const NewToDoListAllData = {
        id: uuidv4(),
        NameToDo: "المهمه",
        details: action.payload.TitleValue,
        isCompleted: false,
      };

      // Update To-Do List with New Task
      const UpdateUseToDoListAllData = [...CurrentToDos, NewToDoListAllData];

      // Save Updated To-Do List to Local Storage
      localStorage.setItem(
        "UseToDoListAllData",
        JSON.stringify(UpdateUseToDoListAllData),
      );

      return UpdateUseToDoListAllData;
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    case "deleted": {
      // Filter Out the Selected To-Do Task
      const FilterDeleteToDo = CurrentToDos.filter((el, i) => {
        return action.payload.SelectIndex !== i;
      });

      // Save Updated To-Do List to Local Storage
      localStorage.setItem(
        "UseToDoListAllData",
        JSON.stringify(FilterDeleteToDo),
      );

      return FilterDeleteToDo;
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    case "AddNewToDoUpdate": {
      // Get Current To-Do List
      const Edite = CurrentToDos;

      // Replace Selected To-Do with Updated Data
      Edite.splice(
        action.payload.selectIndexUpdate,
        1,
        action.payload.ValueUpdateToDoModal,
      );

      // Save Updated To-Do List to Local Storage
      localStorage.setItem("UseToDoListAllData", JSON.stringify(Edite));

      return Edite;
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    case "Completed": {
      // Toggle To-Do Completion Status
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

      // Save Updated To-Do List to Local Storage
      localStorage.setItem("UseToDoListAllData", JSON.stringify(UpdateToDo));

      return UpdateToDo;
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    case "GetInLocalStorage": {
      // Retrieve To-Do List Data from Local Storage
      const StorageUseToDoListAllData =
        JSON.parse(localStorage.getItem("UseToDoListAllData")) ?? [];

      return StorageUseToDoListAllData;
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    default: {
      // Handle Unknown Actions
      throw Error("UnKnown Action", action.type);
    }
  }
}
