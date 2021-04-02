import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import About from './components/About';

function App() {
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Array<Task>>([
    {
        id: 0,
        text: 'Meeting at school',
        day: 'April 1st at 13:00',
        reminder: true,
    },
    {
        id: 1,
        text: 'Work meeting',
        day: 'April 2nd at 14:00',
        reminder: false,
    },
    {
        id: 2,
        text: 'Food shopping',
        day: 'April 3rd at 15:00',
        reminder: true,
    }
  ]);


  // Add Task
  const addTask = (task: NewTask) => {
    const id = tasks.length;
    const newTask: Task = {id: id, ...task};
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id: number) => {
    setTasks(tasks.map((task: Task) => task.id === id
    ? {...task, reminder: !task.reminder } : task))
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header 
          showAdd={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)} 
        />
        <Route path={'/'} exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 
            ? <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
          /> 
        : 'No tasks to show - Create some tasks!'}
          </>
        )} />
        <Route path={'/about'} component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
