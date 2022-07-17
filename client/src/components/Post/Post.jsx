import { MoreVert, ThumbUp } from '@mui/icons-material'
import React,{useEffect, useState,useContext} from 'react'
import axios from 'axios'
import { format} from 'timeago.js';
import { Link } from "react-router-dom";
import {AppContext} from '../../Context/AppContext'

import './Post.css'
function Post(props) {
    const [isliked, setIsliked] = useState(false)
    const [user, setUser] = useState({})
    const [like, setLike] = useState()
    const {cuser}=useContext(AppContext)


    useEffect(() => {
    setIsliked(props.post.likes.includes(cuser._id))
    }, [cuser._id,props.post.likes])
    
    const likeClicked=async()=>{
        try {
            axios.put(`${process.env.React_App_PUBLIC_URL}/post/${props.post._id}/like/`,{
                userId:cuser._id,
            })
        } catch (err) {
            
        }
        setLike(isliked?like-1:like+1);
        setIsliked(!isliked)
    }
    useEffect(() => {
        setLike(props.post.likes.length)
        const getUser=async()=>{
            const res=await axios.get(`/user?userId=${props.post._id}`);
            setUser(res.data)
            
          }
          getUser();
    }, [props.post.userId])
    const deletePost=()=>{
        console.log(cuser._id);
        axios.delete(`${process.env.React_App_PUBLIC_URL}/post/${props.post._id}?userId=${cuser._id}`).then(
            window.location.reload()
        )
    }
    
  return (
    <div>
     <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture?user.profilePicture:"/Assets/noimage.png"} className='postprofileimage' alt="" /></Link>
                    <span className="postusername">{user.username}</span>
                    <span className="postdate">{format(props.post.createdAt)}</span>
                    
                </div>
                <div className="posttopright" style={{cursor:"pointer"}} onClick={deletePost}>
                    
                    {(props.username || props.username===cuser.username) && <MoreVert /> }
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">{props.post.desc}</span>
                <img src={props.post.img} className='postimage' alt="" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <ThumbUp className='likeicon'
                    onClick={likeClicked}
                    htmlColor={isliked?"blue":""}/>
                    <span className="postlikecounter">{like} peoples like it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext"> comments</span>
                </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Post