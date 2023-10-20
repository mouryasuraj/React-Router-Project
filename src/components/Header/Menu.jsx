import React from 'react'

function Menu({showMenu}) {
  return (
    <div>
      <i onClick={showMenu} className="fa-solid fa-bars text-3xl ml-6 lg:hidden hover:scale-[1.1] duration-200 cursor-pointer" style={{color: '#223658'}}></i>
    </div>
  )
}

export default Menu
