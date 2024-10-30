import  { useState, useContext } from "react";
import TaskContext  from "./context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task"
        className="shadow-lg  m-2 w-64 h-10 text-2 text-center"
      />
      <button type="submit" className="bg-orange-600 w-24 h-10" >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
