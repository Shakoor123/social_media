import { MoreVert, ThumbUp } from '@mui/icons-material'
import React,{useEffect, useState,useContext} from 'react'
import axios from 'axios'
import { format} from 'timeago.js';
import { Link } from "react-router-dom";
import {AppContext} from '../../Context/AppContext'

import './Post.css'
function Post(props) {
    const [updateLike, setUpdateLike] = useState(false)
    const [user, setUser] = useState({})
    const [like, setLike] = useState()
    const {cuser}=useContext(AppContext)

    
    const likeClicked=async()=>{
        const res=await axios.put(`${process.env.React_App_PUBLIC_URL}/post/${props.post._id}/like`,{
            userId:cuser._id
        });
        console.log(res);
    }
    useEffect(() => {
        setLike(props.post.likes.length)
        const getUser=async()=>{
            const res=await axios.get(`/user?userId=${props.post.userId}`);
            setUser(res.data)
            
          }
          getUser();
    }, [props.post.userId])

    
  return (
    <div>
     <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture} className='postprofileimage' alt="" /></Link>
                    <span className="postusername">{user.username}</span>
                    <span className="postdate">{format(props.post.createdAt)}</span>
                    
                </div>
                <div className="posttopright">
                    <MoreVert/>
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
                    htmlColor={updateLike?"blue":""}/>
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