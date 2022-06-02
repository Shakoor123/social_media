import Share from '../Share/Share'
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from '../Post/Post'
import axios from 'axios'
import {AppContext} from '../../Context/AppContext'
import { useContext } from 'react'
function Feed(props) {
  
  const {cuser}=useContext(AppContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData=async()=>{
      const res=props.username 
      ? await axios.get(`${process.env.React_App_PUBLIC_URL}/post/profile/${props.username}`)
      : await axios.get(`${process.env.React_App_PUBLIC_URL}/post/timeline/${cuser._id}`);
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
      
    }
    getData();
  }, [props.username,cuser._id])
  return (
    <div className='feed'>
      <div className="feedwrapper">
       {(!props.username ||props.username===cuser.username) &&<Share/> }
        {posts.map(post=>{

      return <Post post={post}/>
        })}

      </div>
    </div>
  )
}

export default Feed