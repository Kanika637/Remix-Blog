import React from 'react'
import {db} from '~/utils/db.server'
import {Link, useLoaderData} from "@remix-run/react"

export const loader=()=>{
  const data={
    posts: await db.post.findMany({
      take: 20,
      select: {id: true, title:true, createdAt: true},
      orderBy: {createdAt:'desc'}
    }),
  }
  return data
}

function PostItems() {
  const {posts}=useLoaderData()

  return (
    <>
    <div className='page-header'>
    <h1>Posts</h1>
      <Link to='/posts/new' className='btn'>
        New Posts
      </Link>
    </div>
       
        <ul className='posts-list'>
          {posts.map(post=>(
            <li key={post.id}>
              <Link to={post.id}>
                <h3>{post.title}</h3>
              </Link>
            </li>
          ))}</ul></>
  )
}

export default PostItems