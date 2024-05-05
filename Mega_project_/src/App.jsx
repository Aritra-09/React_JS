import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Outlet } from 'react-router-dom';
import authservice from './appwrite/auth';
import { login, logout } from './store/slice';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect (() => {
    authservice.getCurrentUser()
    .then((userData) => {

      if (userData){
        dispatch(login(userData));
      }

      else{
        dispatch(logout(userData));
      } 

    })
    .finally(() => setLoading(false));
  }, [])

  return !loading ? (
    <>
      <div className="w-full block">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      </div>
    </>
  ) :
  (
    <div className='text-white text-3xl font-bold'>Loading.......</div>
  )
}

export default App
