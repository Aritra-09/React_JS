import React from 'react'
import ReactDOM from 'react-dom/client'

// Creating own JSX element with function 

function NewApp(){
  return(
    <h1>New App | AR</h1>
  )
}


const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click to visit google'
}


const newElement = (
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, ipsa.</p>
)

const newReactElement =React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  "Click to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <NewApp />
    // NewApp()
    // newElement  
    newReactElement
    
)
