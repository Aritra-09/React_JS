import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Contact from './components/Contact'
import Github, { githubInformation } from './components/Github'
import Home from './components/Home'
import User from './components/User'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App/>,
//     children: [ 
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       },
//       {
//         path:"user/:id",
//         element:<User />
//       },
//       {
//         path:"github",
//         element:<Github />,
//         loader: {githubInformation}
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='about' element= {<About/>}/>
      <Route path='contact' element= {<Contact/>}/>
      <Route path='user/:id' element= {<User/>}/>
      <Route 
      loader={githubInformation}
      path='github' element= {<Github/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
