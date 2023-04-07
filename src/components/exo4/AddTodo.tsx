import { FormEvent } from "react";
import { Task } from "./model/Task";


interface Props {
    val: Task;
    setVal: React.Dispatch<React.SetStateAction<Task>>;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const AddTodo= ({val, setVal, handleSubmit}: Props)=> {

    const handleChange= (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
        const {name, value} = e.target;
        setVal(prev => ({...val, [name]: value}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom 
                <input id="name" type="text" name="name" value={val.name} onChange={handleChange} />
            </label>

            <label htmlFor="description">Description 
                <input id="description" type="text" name="description" value={val.description} onChange={handleChange} />
            </label>

            <label htmlFor="priority">Priority 
                <select id="priority" name="priority" value={val.priority} onChange={handleChange}>
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                </select>
            </label>
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default AddTodo;