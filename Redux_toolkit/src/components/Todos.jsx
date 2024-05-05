import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

function Todos() {

    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const todos = useSelector(state => state.todos)  // useSelector -> reducer -> store
    const dispatch = useDispatch()  // useDispatch -> reducer -> store

  return (
    <>
    <ul className='list-none'>
    {todos.map((todo) => (
        <li key={todo.id} className='my-5 flex justify-between items-center bg-gray-500 px-5 py-2 rounded-xl text-white text-lg font-medium'>
            {todo.text}


        <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50" onClick={setIsTodoEditable((prev) => !prev)}>
        {isTodoEditable ? "📁" : "✏️"}
        </button>

        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(deleteTodo(todo.id))}
        >
            ❌
        </button>
        </li>
    ))}
    </ul>
    </>
  )
}

export default Todos
