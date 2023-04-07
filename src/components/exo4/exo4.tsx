import { FormEvent, useState } from "react";
import { Task } from "./model/Task";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

enum filterVal {
    ALL= "ALL", 
    CURRENT= "CURRENT",
    IMPORTANT= "IMPORTANT", 
    ENDED= "ENDED"
}


const Exo4 = ()=> {
    const [val, setVal]= useState<Task>({id:0, name: "", description: "", priority: "normal", isCompleted: false});
    const [todos, setTodos]= useState<Task[]>([]);
    const [filter, setFilter]= useState<filterVal>(filterVal.ALL);

    const handleSubmit= (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setTodos(prev => prev.concat({...val, id: Date.now()}));
        setVal({id:0, name: "", description: "", priority: "normal", isCompleted: false})
    }

    const handleDelete= (id: number)=> {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    const handleComplete= (id: number)=> {
        setTodos(prev => prev.map(todo => {
            if(todo.id=== id){
                return {...todo, isCompleted: true}
            }else {
                return todo;
            }
        }))
    }

    let todosElem;
    switch(filter){
        case filterVal.CURRENT:
            const currentTodos= todos.filter(task=> !task.isCompleted);
            todosElem= currentTodos.map(task=> <Todo key={task.id} task={task} handleComplete={handleComplete} handleDelete={handleDelete}/>)
            break;
        case filterVal.ENDED :
            const finishedTodos= todos.filter(task=> task.isCompleted);
            todosElem= finishedTodos.map(task=> <Todo key={task.id} task={task} handleComplete={handleComplete} handleDelete={handleDelete}/>)
            break;
        case filterVal.IMPORTANT:
            const importantTodos= todos.filter(task=> task.priority==="high");
            todosElem= importantTodos.map(task=> <Todo key={task.id} task={task} handleComplete={handleComplete} handleDelete={handleDelete}/>)
            break;
        case filterVal.ALL:
            todosElem= todos.map(task=> <Todo key={task.id} task={task} handleComplete={handleComplete} handleDelete={handleDelete}/>)
            break;
    }

    return (
        <div className="row">
            <h1>Ajouter une nouvelle tâche</h1>
            <AddTodo val={val} setVal={setVal} handleSubmit={handleSubmit}/>
            <hr/>
            <h1>Liste des tâches</h1>
            <label htmlFor="filter" className="form-label">Filter
            <select name="filter" className="form-select" id="filter" value={filter} onChange={(e)=> setFilter(e.target.value)}>
                <option value={filterVal.ALL}>ALL</option>
                <option value={filterVal.CURRENT}>Current</option>
                <option value={filterVal.IMPORTANT}>Important</option>
                <option value={filterVal.ENDED}>Ended</option>
            </select>
            </label>
            {todosElem}
        </div>
    )
}

export default Exo4;