import Share from '../Share/Share'
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from '../Post/Post'
import axios from 'axios'
import {AppContext} from '../../Context/AppContext'
import { useContext } from 'react'
function Feed({username}) {
  
  const {cuser}=useContext(AppContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData=async()=>{
      const res=username 
      ? await axios.get(`${process.env.React_App_PUBLIC_URL}/post/profile/${username}`)
      : await axios.get(`${process.env.React_App_PUBLIC_URL}/post/timeline/${cuser._id}`);
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