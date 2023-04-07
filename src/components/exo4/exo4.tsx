import { FormEvent, useState } from "react";
import { Task } from "./model/Task";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

enum filterVal {
    ALL, CURRENT, IMPORTANT, ENDED
}


const Exo4 = ()=> {
    const [val, setVal]= useState<Task>({id:0, name: "", description: "", priority: "normal", isCompleted: false});
    const [todos, setTodos]= useState<Task[]>([]);
    const [filter, setFilter]= useState<filterVal>(filterVal.ALL);

    const handleSubmit= (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setTodos(prev => [...prev, {...val, id: Date.now()}]);
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


    const todosElem= todos.map(task=> <Todo key={task.id} task={task} handleComplete={handleComplete} handleDelete={handleDelete}/>)

    return (
        <div className="row">
            <h1>Ajouter une nouvelle tâche</h1>
            <AddTodo val={val} setVal={setVal} handleSubmit={handleSubmit}/>
            <hr/>
            <h1>Liste des tâches</h1>
            {todosElem}
        </div>
    )
}

export default Exo4;