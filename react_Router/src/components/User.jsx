import React from 'react'

import { useParams } from 'react-router-dom'

function User() {

    const {id} = useParams()
  return (
    <div className='bg-black text-white text-3xl p-5 font-bold'>
      User : {id}
    </div>
  )
}

export default User
