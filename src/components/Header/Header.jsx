import React, { useState } from 'react'
import Logo from './Logo'
import Login from './Login'
import Menu from './Menu'
import Navlink from './Navlink'
import SignUp from './SignUp'

function Header() {

  const [isActive, setIsActive] = useState(false)

  const showMenu = () =>{
    setIsActive(current => !current)
  }

  return (
    <header className='bg-white w-full flex justify-between z-20 items-center px-4 lg:px-6 py-3 shadow-md sticky top-0'>
        <div className='bg-white w-full flex justify-between items-center'>
            <Logo height='h-12' />
            <div className='flex flex-wrap items-center gap-x-1 lg:order-2'>
                <Login />
                <SignUp />
                <Menu showMenu={showMenu} />
            </div>
            <div className={`lg:block  lg:order-1 ${isActive ? 'block' : 'hidden'}`}>
                  <Navlink showMenu={showMenu} />
            </div>
        </div>
    </header>
  )
}

export default Header
