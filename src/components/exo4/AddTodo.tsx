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
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
                <label htmlFor="name" className="form-labe">Nom 
                    <input id="name" className="form-control" type="text" name="name" value={val.name} onChange={handleChange} />
                </label>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-labe">Description 
                    <input id="description" className="form-control" type="text" name="description" value={val.description} onChange={handleChange} />
                </label>
            </div>
            
            <div className="mb-3">
                <label htmlFor="priority" className="form-labe">Priority 
                    <select id="priority" name="priority" className="form-select" value={val.priority} onChange={handleChange}>
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                    </select>
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Ajouter</button>
        </form>
    )
}

export default AddTodo;