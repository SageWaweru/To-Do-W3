import { useContext } from "react";
import TaskContext from "./context/TaskContext";

const FilterButtons = () => {
 
    const { setFilter } = useContext(TaskContext);
  
  return (
    <div className="mb-6">
      <button onClick={() => setFilter("all")}  className="bg-orange-600 w-24 m-2">
        All
      </button>
      <button onClick={() => setFilter("active")}  className="bg-red-600 w-24  m-2">
        Active
      </button>
      <button onClick={() => setFilter("completed")}  className="bg-lime-600 w-24  m-2">
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
