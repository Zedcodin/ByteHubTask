import React from 'react'
import { postPropTypes } from '../types/types'

function PostCard(props:postPropTypes) {
  return (
    <div>
        <h1>{props.tittle}</h1>
        <p>{props.body}</p>
    </div>
  )
}

export default PostCard