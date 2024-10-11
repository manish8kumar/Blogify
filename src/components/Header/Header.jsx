import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link ,NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,

    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,

  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
 
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,

  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,

  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='120px'   />
              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-yellow-500' : 'text-black'
                    }  inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full`}>
                  {item.name}
                </NavLink>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header