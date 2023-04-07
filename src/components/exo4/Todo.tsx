import { Task } from "./model/Task";

interface Props {
    task: Task;
    handleDelete: (id: number) => void;
    handleComplete: (id: number) => void;
}

import styles from "./exo4.module.css"


const Todo= ({task, handleComplete, handleDelete}: Props)=> {

    return (
        <div className={task.isCompleted ? styles.completed : "container"}>
            <h3>{task.name}</h3> <span className="priority">{task.priority}</span>
            <p>{task.description}</p>
            <button disabled={task.isCompleted} type="button" onClick={()=> handleComplete(task.id)}>Terminer</button>
            <button type="button" onClick={()=> handleDelete(task.id)}>Supprimer</button>
        </div>
    )
}

export default Todo;