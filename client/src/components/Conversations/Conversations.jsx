import React, { useContext, useState,useEffect } from 'react'
import './Conversations.css'
import {AppContext} from '../../Context/AppContext'
import axios from 'axios'
function Conversations({conversation}) {
  const [user, setUser] = useState({});
  const {cuser}=useContext(AppContext)
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== cuser._id);

    const getUser = async () => {
      try {
        const res = await axios(process.env.React_App_PUBLIC_URL+"/user?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [cuser, conversation]);
  return (
    <div className='conversation'>
        <img src={user.profilePicture?user.profilePicture:"/Assets/noimage.png"} alt="" className="conversationImg" />
        <span className="conversationName">{user.username}</span>
    </div>
  )
}

export default Conversations