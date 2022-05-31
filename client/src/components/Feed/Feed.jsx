import Share from '../Share/Share'
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from '../Post/Post'
import axios from 'axios'
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