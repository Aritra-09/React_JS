import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Logo, Logout } from '../index'

function Header() {

  const authStatus = useSelector((state) => state.authStatus)

  const navigate = useNavigate();

  const navItems = [
    {
      name:"Home",
      slug: '/',
      active: true
    },
    {
      name:"Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name:"Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name:"All Posts",
      slug: "/all-post",
      active: authStatus,
    },
    {
      name:"Add Posts",
      slug: "/add -post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo /> {/*width = ''*/}
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((item) => 
                item.active ? 
                ( 
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)} className='inline-block px-5 py-2 duration-200 hover: bg-indigo-100 rounded-full'>{item.name}</button>
                </li> 
              ) : null
            )}

            {authStatus && (
              <li>
                <Logout/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
