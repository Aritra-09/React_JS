import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/User_context_provider'

function App() {

  return (
    <UserContextProvider>
      <h1>Learning React Context</h1>
      <Profile/>
      <Login/>
    </UserContextProvider>
  )
}

export default App
