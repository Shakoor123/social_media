import Share from '../Share/Share'
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from '../Post/Post'
import axios from 'axios'
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData=async()=>{
      const res=await axios("/post/timeline/6293931f07972cd67a78b94e");
      setPosts(res.data)
      
    }
    getData();
  }, [])
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        {posts.map(post=>{

      return <Post post={post}/>
        })}

      </div>
    </div>
  )
}

export default Feed