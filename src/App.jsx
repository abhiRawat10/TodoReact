import { useEffect, useState } from 'react'
import { ToDoProvider } from './contexts/ToDoContext'
import TodoForm from './components/TodoForm';
import Item from './components/Item';

function App() {
  const [todos,setTodos]=useState([]);

  const addTodo=(todo)=>{
    setTodos((prev)=>
      [...prev,{...todo,id:Date.now()}]
    )
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>
      prevTodo.id!=id
    ))
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>{
      return prevTodo.id==id?todo:prevTodo
    }))
  }

  const toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>{
      return prevTodo.id==id?{...prevTodo,completed:!prevTodo.completed}:prevTodo
    }))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos'));

    if(todos && todos.length>0)
      setTodos(todos);

  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));   //if written in one useeffect it will also getItem every time during setting item
  },[todos])



  return (
    <ToDoProvider value={{todos,setTodos,addTodo,updateTodo,toggleTodo,deleteTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        
        <div className="mb-4">
          <TodoForm/> 
        </div>
        
        <div className="flex flex-wrap gap-y-3">
          {todos.map(task=>{
            return <Item todo={task}/>
          })}
        </div>

      </div>
    </div>
    </ToDoProvider>
  )
}

export default App
