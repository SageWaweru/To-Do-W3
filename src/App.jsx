import { TaskProvider } from "./context/TaskProvider";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import FilterButtons from "./FilterButtons";
function App() {
  
  return (
    <TaskProvider>
      <div className=" p-2 w-screen flex flex-col justify-center items-center">
        <div className="shadow-lg w-96">
          <h1 className="text-2xl text-center m-2" >To-Do List</h1>
          <TaskForm />
          <FilterButtons />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
