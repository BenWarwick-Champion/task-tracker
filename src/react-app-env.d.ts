/// <reference types="react-scripts" />


interface TasksProps {
    tasks: Array<Task>,
    onDelete: (id: number) => void,
}

interface TaskProps {
    task: Task
    onClick: (id: number) => void,
}

interface ButtonProps {
    text: string,
    onClick(): void
}

type Task = {
    id: number,
    text: string,
    day: string,
    reminder: boolean
}
