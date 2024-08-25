import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
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
    name: "My Posts",
    slug: "/my-posts",
    active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  const iconClick = () => {
    const menu = document.getElementById('menu')
    const icon = document.getElementById('icon')
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden')
      icon.src = "../../close.png"
    } else {
      menu.classList.add('hidden')
      icon.src = "../../navigation-bar.png"
    }
  }
  return (
    <header className='py-3 mt-4 px-3'>
      <Container>
        <nav className='flex justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <div className=' flex flex-col'>
          <div className='mr-4 self-end'>

            <img 
            src="../../navigation-bar.png" 
            id='icon'
            className='md:hidden w-8 h-8' 
            onClick={iconClick}
            alt="" />
          </div>
          <ul 
          id='menu'
          className='md:flex ml-auto hidden'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}
              className='mt-4'
              >
                <NavLink
                className={({isActive}) => `${isActive ? "bg-gradient-to-r from-[#8057f5] to-[#7e56f3] bg-clip-text text-transparent" : "text-black"} inline-bock px-6 py-2 font-semibold`}
                to={item.slug}>
                  {item.name}
                </NavLink>
              </li>
            ) : null
            )}
            {authStatus && (
              <li className='mt-2'>
                <LogoutBtn />
              </li>
            )}
          </ul>
          </div>
        </nav>
        </Container>
    </header>
  )
}

export default Header