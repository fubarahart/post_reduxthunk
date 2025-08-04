import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gatallposts } from '../Redux/Action'
import PostCard from './PostCard'

const PostList = () => {
    const posts = useSelector(state => state.posts)
    console.log(posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(gatallposts())
    }, [])

    console.log(posts)


  return (
    <div className='post'>
      {posts.map(post =>
       <PostCard post={post} />

      )}
      
     
    </div>
  )
}

export default PostList