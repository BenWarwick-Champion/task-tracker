import {FaTimes} from 'react-icons/fa';

const Task = (props: TaskProps) => {
    return (
        <div className='task'>
            <h3>
                {props.task.text}
                <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => props.onClick(props.task.id)}
                />
            </h3>
            <p>{props.task.day}</p>
        </div>
    )
}

export default Task
