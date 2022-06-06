import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ChatOnline.css'
function ChatOnline({onlineUsers,currentId,setCurrentChat}) {

const [friends, setFriends] = useState([])
const [onlineFriends, setOnlineFriends] = useState([])

useEffect(() => {
  const getFriends=async()=>{
      const res=await axios.get(process.env.React_App_PUBLIC_URL+'/user/friends/'+currentId)
      setFriends(res.data)
  }
  getFriends()
}, [currentId])
useEffect(() => {
  setOnlineFriends(friends.filter(f=>onlineUsers.includes(f._id)))
}, [friends,onlineUsers])

    const hadleClick=()=>{
        try {
            const res=await axios
        } catch (err) {
            console.log(err);
        }
    }
return (
        <div className='ChatOnline'> 
            {onlineFriends.map(o=>(
            <div className="ChatOnlineFriend" onClick={hadleClick(o)}>
                <div className="ChatOnlineImgContainer">
                    <img src={o?.profilePictuer?o.profilePictuer:"/Assets/noimage.png"} alt="" className="ChatOnlineImg" />
                    <div className='ChatOnlineBadge'></div>
                </div>
                <span className="chatOnlineName">{o.username}</span>
            </div>
            ))}
        </div>
    )
}

export default ChatOnline