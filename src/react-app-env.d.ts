/// <reference types="react-scripts" />

interface AddTaskProps {
    onAdd: (task: NewTask) => void,
}

type NewTask = {
    text: string,
    day: string,
    reminder: boolean
}

interface TasksProps {
    tasks: Array<Task>,
    onDelete: (id: number) => void,
    onToggle: (id: number) => void
}

interface TaskProps {
    task: Task,
    onClick: (id: number) => void,
    onToggle: (id: number) => void
}

interface HeaderProps {
    showAdd: boolean,
    onAdd: () => void
}

interface ButtonProps {
    text: string,
    color: string,
    onClick(): void
}

type Task = {
    id: number,
    text: string,
    day: string,
    reminder: boolean
}
