import React, { useContext, useState } from 'react'
import UserContext from '../context/User_Context'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
      <input style={{margin: "5px", padding:"8px 20px"}} type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value) } />
      <br />
      <input style={{margin: "5px", padding:"8px 20px"}} type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value) } />
      <br />
      <button style={{margin: "5px"}} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
