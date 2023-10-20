import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userId} = useParams({});   

  return (
    <div className='p-2 bg-gray-800 text-white w-1/2 mx-auto'>
      User:{userId}
    </div>
  )
}

export default User
