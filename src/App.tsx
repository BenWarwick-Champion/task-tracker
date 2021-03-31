import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState<Array<Task>>([
    {
        id: 1,
        text: 'Meeting at school',
        day: 'April 1st at 13:00',
        reminder: true,
    },
    {
        id: 2,
        text: 'Work meeting',
        day: 'April 2nd at 14:00',
        reminder: false,
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'April 3rd at 15:00',
        reminder: true,
    }
  ])

  // Delete Task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 
      ? <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
      /> 
      : 'No tasks to show - Create some tasks!'}
    </div>
  );
}

export default App;
