import { Task } from "./model/Task";

interface Props {
    task: Task;
    handleDelete: (id: number) => void;
    handleComplete: (id: number) => void;
}

import styles from "./exo4.module.css"


const Todo= ({task, handleComplete, handleDelete}: Props)=> {

    return (
        <div className="card">
            <div className={`card-body ${task.isCompleted ? styles.completed : ""}`}>
                <h3 className="card-title">{task.name}</h3> <span className="priority">{task.priority}</span>
                <p className="card-text">{task.description}</p>
                <button className="btn btn-outline-success" disabled={task.isCompleted} type="button" onClick={()=> handleComplete(task.id)}>Terminer</button>
                <button className="btn btn-danger" type="button" onClick={()=> handleDelete(task.id)}>Supprimer</button>
            </div>
        </div>
    )
}

export default Todo;