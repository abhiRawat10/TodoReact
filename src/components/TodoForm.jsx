import { useTodoContext } from "../contexts/ToDoContext";
import { useState } from "react";
function TodoForm() {
    
    const [msg,setMsg]=useState('');

    const {addTodo}=useTodoContext()
    
    const add=(e)=>{
        e.preventDefault();

        if(!msg)return

        addTodo({msg:msg,completed:false});
        setMsg("");
    }

    return (
        <form  className="flex">
            <input
                type="text"
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={add}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;

