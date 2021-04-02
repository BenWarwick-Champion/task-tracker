import Task from "./Task";

const Tasks = (props: TasksProps) => {
    return (
        <>
          {props.tasks.map((task) => (
              <Task 
                key={task.id} 
                task={task} 
                onClick={props.onDelete}
                onToggle={props.onToggle}
              />
          ))}
        </>
    )
}

export default Tasks;
