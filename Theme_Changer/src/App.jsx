import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'

function App() {

  const [theme, setTheme] = useState("light")

  const lighttheme = () =>{
    setTheme("light")
  }

  const darktheme = () =>{
    setTheme("dark")
  }

  // Change in Theme 

  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove("light", "dark")
    html.classList.add(theme)
  }, [theme])
  
  return (
    <ThemeProvider value={{theme, darktheme, lighttheme}}>
     
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <Button/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
      </div>
    </div>          

    </ThemeProvider>
  )
}

export default App
