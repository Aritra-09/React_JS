import { useState } from 'react';
import './App.css';

function App() {
  console.log("App Rendered", Math.random());
  const [value, setValue] = useState({
    value: 0,
  })
  // const [multipliedValue, setMultipliedValue] = useState(1)
  let multipliedValue = value * 5

  // const multiplyByFive = () => {
  //   // setMultipliedvalue(value*5)
  //   setValue(value + 1) 
  // }

  const clicked = () => {
    setValue({
      value: 0,
    })
  }
  return (
    <>
      <h1>Main Value: {value.value}</h1>
      {/* <h2>Multiplied Value: {multipliedValue} </h2> */}
      <button onClick={clicked}>Click to multiply by 5</button>
    </>
  )
}

export default App
