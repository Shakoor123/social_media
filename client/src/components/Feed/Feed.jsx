import Share from '../Share/Share'
import React from 'react'
import "./Feed.css"
import Post from '../Post/Post'
function Feed() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed