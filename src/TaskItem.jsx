import  { useContext, useState } from "react";
import PropTypes from "prop-types";
import TaskContext  from "./context/TaskContext";

const TaskItem = ({ task }) => {
  const { updateTaskStatus, editTask, deleteTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (newTitle.trim()) {
      editTask(task.id, newTitle.trim());
      setIsEditing(false);
    } else {
      alert("Task title cannot be empty");
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="flex bg-orange-50 grid grid-cols-2 m-2">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span className= {`${task.completed ? "line-through text-gray-500" : ""}`} >
        <input type="checkbox" role="button"  onClick={() => updateTaskStatus(task.id)} className="m-2 mt-4" />{task.title}
        </span>
      )}
      <div >
        {isEditing ? (
          <button onClick={handleEdit} className="bg-orange-600 w-12 m-2 ml-6">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-orange-600 w-12 m-2 ml-6">Edit</button>
        )}
        <button onClick={handleDelete}className="bg-red-600 w-14 m-2">Delete</button>
      </div>
    </div>
  );
};


TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TaskItem;
