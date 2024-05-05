import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  
  return (
    <>
     <h1 className='mb-6 text-4xl font-semibold text-white'>TODO with Redux Toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
