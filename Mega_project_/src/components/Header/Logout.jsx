import React from 'react';
import { useDispatch } from 'react-redux';
import authservice from '../../appwrite/auth';
import { logout } from '../../store/slice';

function Logout() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authservice.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    
    <button className='inline-block px-5 py-2 duration-200 hover: bg-indigo-100 rounded-full' onClick={logoutHandler}>Logout</button>

  )
}

export default Logout
