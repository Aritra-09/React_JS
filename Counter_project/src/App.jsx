import { useState } from 'react';
import './App.css';

function App() {
  
  let [value, setValue ] = useState(0)
  let [limit, setlimit ] = useState('')


  const increase = () =>{
    if (value<20)
    {
      setValue(value +1);
      setlimit('')
    }

    else
      setlimit("Maximum Limit Reached")
  }

  const decrease = () =>{
    if (value>0){
      setValue(value -1);
      setlimit('')
    }
    else
      setlimit("Minimum Limit Reached")
  }


  // Vanila Javascript 

  // let value = 0

  // const increase = () =>{
  //   value = value + 1
  //   console.log(value);
  // }

  // const decrease = () =>{
  //   value = value - 1
  //   console.log(value);
  // }

  
  return (
    <>
      <h1>Hello this is my own code</h1>
      <h2>Counter: {value}</h2>
      <p>{limit}</p>

      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
    </>
  )
}

export default App
