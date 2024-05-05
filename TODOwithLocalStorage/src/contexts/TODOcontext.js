import { createContext, useContext } from 'react';

export const TODO_Context = createContext({
    todos:[
        {
            id: 1,
            todo: "TODO",
            completed: false,
        },
        {}
    ],
    addTodo: (todo) => {},
    editTodo: (id, todo) => {},
    deleteTodo:(id) => {},
    toggleComplete: (id) => {},
})


export const useTodo = () =>{
    return useContext(TODO_Context)
}

export const TODOProvider = TODO_Context.Provider;