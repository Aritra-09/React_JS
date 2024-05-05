import { useState } from 'react'
import './App.css'

function App() {
  
  const [color, setColor] = useState("white")

  return (
    <>
     <div className="w-screen h-screen flex justify-center flex-col items-center duration-200" style={{backgroundColor: color}}>
      <ul className="flex items-centers justify-center gap-5  bg-gray-500 w-[50rem] text-black py-3 rounded-2xl">
        <li className="px-4 py-3 bg-red-600 rounded-xl cursor-pointer" onClick={()=>setColor("red")}>Red</li>
        <li className="px-4 py-3 bg-orange-500 rounded-xl cursor-pointer" onClick={()=>setColor("orange")}>Orange</li>
        <li className="px-4 py-3 bg-yellow-400 rounded-xl cursor-pointer" onClick={()=>setColor("yellow")}>Yellow</li>
        <li className="px-4 py-3 bg-green-500 rounded-xl cursor-pointer" onClick={()=>setColor("green")}>Green</li>
        <li className="px-4 py-3 bg-blue-500 rounded-xl cursor-pointer" onClick={()=>setColor("blue")}>Blue</li>
        <li className="px-4 py-3 bg-indigo-500 rounded-xl cursor-pointer" onClick={()=>setColor("indigo")}>Indigo</li>
        <li className="px-4 py-3 bg-violet-500 rounded-xl cursor-pointer" onClick={()=>setColor("violet")}>Violet</li>
        <li className="px-4 py-3 bg-white rounded-xl cursor-pointer" onClick={()=>setColor("white")}>White</li>
    </ul>
    </div>
    </>
  )
}

export default App
