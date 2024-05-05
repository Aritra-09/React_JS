import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState =  {
    todos:[{
        id:1,
        text:"Hello",
        complete: false
    }],
}       //  [] or {}


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                    id: nanoid(),
                    text: action.payload
            }

            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => (todo.id === action.payload ? action.payload.text : todo.text))
        },
        toggleComplete: (state, action) => {
            state.todos.map((todo) => (todo.id === action.payload ? !todo.complete : todo) )
        },
    }
})


export const {addTodo, deleteTodo, updateTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer