import { MoreVert, ThumbUp } from '@mui/icons-material'
import React,{useEffect, useState} from 'react'
import axios from 'axios'

import './Post.css'
import { Divider } from '@mui/material'
function Post() {
    const [updateLike, setUpdateLike] = useState(false)
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({})
    const [like, setLike] = useState()


     useEffect(() => {
    const getData=async()=>{
      const res=await axios("/post/timeline/6293931f07972cd67a78b94e");
      setPosts(res.data)
      setLike(res.data.likes.length)
    }
    getData();
  }, [])
    const  likehandler=()=>{
        setUpdateLike(!updateLike?true:false)
        setLike(updateLike?like-1:like+1)
    }
    {posts.map((p)=>{
        // console.log(p);
    })}
  return (
    <div>
    {posts.map(post=>{
        const getUser=async()=>{
            const res=await axios(`/user/${post.userId}`);
            setUser(res.data)
            console.log(user);
        }
        getUser();
      return <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src={user.profilePictue} className='postprofileimage' alt="" />
                    <span className="postusername">{user.username}</span>
                    <span className="postdate">5 min ago</span>
                </div>
                <div className="posttopright">
                    <MoreVert/>
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">{post.desc}</span>
                <img src={post.img} className='postimage' alt="" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <ThumbUp className='likeicon'
                    onClick={likehandler}
                    htmlColor={updateLike?"blue":""}/>
                    <span className="postlikecounter">{like} peoples like it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext"> comments</span>
                </div>
            </div>
        </div>
        
    </div>
    })}
    </div>
  )
}

export default Post