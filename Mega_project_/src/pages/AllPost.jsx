import React, { useEffect, useState } from 'react'
import dbservice from '../appwrite/con_fig'
import { Card, Container } from '../components/index'

function AllPost() {

    const [posts, setPosts] = useState([])

    useEffect(() => {

    }, [])

    dbservice.getPosts([]).then((posts) => posts? setPosts(posts.documents): [])

  return (
    <div className='w-full py-7'>
      <Container>
        <div className="flex flex-wrap">
        {posts.map((post) => (
            <div className='p-2 w-1/4' key={post.$id}>
                <Card post={post}/>
            </div>
        ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
