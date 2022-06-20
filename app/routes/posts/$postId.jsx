import { useParams } from '@remix-run/react'
import React from 'react'

function Post() {
    const params=useParams()
  return (
    <div>Post Id {params.postId} </div>
  )
}

export default Post