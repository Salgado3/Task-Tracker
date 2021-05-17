import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: "Doctors Appointment",
        day: 'Feb 5th at 2:30PM',
        reminder: true,
    },
    {
        id: 2,
        text: "Gym",
        day: 'Feb 4th at 2:30PM',
        reminder: true,
    },
    {
        id: 3,
        text: "run",
        day: 'Feb 6th at 2:30PM',
        reminder: true,
    },
])

//delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
}

  return (
    <div className="container">
      <Header />   
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks to show" }
    </div>
  );
}

export default App