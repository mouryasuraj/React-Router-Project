import React from 'react'
import { NavLink } from 'react-router-dom'
function Link({linkName, goTo, textSize,target}) {
  return (
    <li className="p-4  lg:hover:bg-white cursor-pointer flex items-center justify-center">
        <NavLink to={goTo} target={target} className={({isActive})=>`${isActive ? 'text-orange-700': 'text-blue-500'} ${textSize} font-bold`}>
            {linkName}
        </NavLink>
      </li>
  )
}

export default Link
