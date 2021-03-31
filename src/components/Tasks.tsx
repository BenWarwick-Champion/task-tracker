import Task from "./Task";

export const Tasks = (props: TasksProps) => {
    return (
        <>
          {props.tasks.map((task) => (
              <Task 
                key={task.id} 
                task={task} 
                onClick={props.onDelete}
              />
          ))}
        </>
    )
}

export default Tasks;
