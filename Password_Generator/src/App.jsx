import { useCallback, useEffect, useRef, useState } from 'react';


function App() {
  // useState Hooks
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numberadded, setNumberadded] = useState(false);
  const [charadded, setCharadded] = useState(false);
  const [copy, setcopy] =useState("copy");

  //useCallback hooks
  const password_generator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberadded) str+= "0123456789"
    if (charadded) str+= "!@#$%^&*()[]{}"

    for (let index = 1; index <= length; index++) {

      let char = Math.floor(Math.random() * str.length + 1)

      pass+= str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberadded, charadded, setPassword])


  const copytoClipboard = useCallback (()=>{
    window.navigator.clipboard.writeText(password);

    passRef.current?.select(); //to highlight the copied text

    setcopy("copied");

    setTimeout(() => {
      setcopy("copy")
    }, 2500);

  }, [password])

  // useEffect hook
  useEffect(()=>{
    password_generator()
  }, [length, numberadded, charadded, password_generator])

  // useRef hook
  const passRef = useRef(null);

  return (
    <>
     <div className='bg-gray-800 w-full max-w-md mx-auto my-12 px-8 pb-1 rounded-xl'>
      <h2 className='text-white text-center text-3xl my-5 pt-2'>Password Generator</h2>

     <div className="flex overflow-hidden mb-10 rounded-lg">
      <input 
      type="text" 
      value={password}
      className='w-full px-4 py-1 outline-none text-orange-500 text-lg'
      placeholder='password'
      readOnly
      ref={passRef}/>

      <button className='bg-blue-500 rounded-sm text-lg text-center text-white py-1 px-4 hover:bg-blue-800 duration-150' onClick={copytoClipboard}>
        {copy}
      </button>
     </div>

     <div className="flex text-sm gap-x-3">
      <div className="flex items-center gap-x-1">
        <input type="range"
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="range" className='text-orange-500'>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked= {numberadded}
        id = "Numberinput"
        onChange={() => {setNumberadded((prev) => !prev)}}/>
         <label htmlFor="numberinput" className='text-orange-500'>Number</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked= {charadded}
        id = "Numberinput"
        onChange={() => {setCharadded((prev) => !prev)}}/>
         <label htmlFor="numberinput" className='text-orange-500'>Characters</label>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
