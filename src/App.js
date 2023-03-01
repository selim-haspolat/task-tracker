import { useState } from "react";
import AddTask from "./components/AddTask";
import Main from "./components/Main";

function App() {
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  return (
    <div className="h-screen bg-slate-800 p-10">
      <Main tasks={tasks} setTasks={setTasks} setShowModal={setShowModal}/>
      <AddTask setShowModal={setShowModal} showModal={showModal} setTasks={setTasks} tasks={tasks}/>
    </div>
  );
}

export default App;
