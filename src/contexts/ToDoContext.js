import React, { createContext, useContext } from 'react'

export const ToDoContext=createContext({
    todos:[{
        id:1,
        msg:"hello",
        completed:false
    }],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleTodo:(id)=>{}

});

export const ToDoProvider=ToDoContext.Provider;

export const useTodoContext=()=>{
    return useContext(ToDoContext);
}