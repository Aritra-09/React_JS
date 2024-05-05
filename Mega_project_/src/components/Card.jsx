import React from 'react'
import { Link } from 'react-router-dom'
import services from '../appwrite/con_fig'


function Card({$id, title, image}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
            <div className='w-full justify-center mb-4'>
                <img src={services.FilePreview(image)} alt={title} className='rounded-xl'/>

            </div>
            <h2 className='text-xl font-semibold'>{title}</h2>
        </div>
    </Link>
  )
}


export default Card
