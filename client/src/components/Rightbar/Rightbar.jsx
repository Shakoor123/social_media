import React, { useContext, useEffect, useState } from 'react'
import Online from '../online/Online'
import './Rightbar.css'
import axios from "axios";
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { Add, Remove } from '@mui/icons-material';
function Rightbar({ user }) {
  const [friends, setFriends] = useState([])
  const {cuser}=useContext(AppContext)
  const [followed, setFollowed] = useState(false)
  useEffect(() => {
    setFollowed(cuser.followings.includes(user?._id))
  },[cuser,user])
  

  useEffect(() => {
    const getFriends = async () => {

      try {
        await axios.get(`${process.env.React_App_PUBLIC_URL}/user/friends/${user._id}`).then((res) => {
          setFriends(res.data)
          console.log(friends);
        })

      } catch (err) {
        console.log(err);
      }
    }
    getFriends();
  }, [user])
  const handleClick=async()=>{
    try {
      if(followed){
        await axios.put(`${process.env.React_App_PUBLIC_URL}/user/${user._id}/unfollow`,{
          userId:cuser._id,
        })
  
      }else{
        await axios.put(`${process.env.React_App_PUBLIC_URL}/user/${user._id}/follow`,{
          userId:cuser._id,
        })
  
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed)
  }


  const Homerightbar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img src="/Assets/gift.jpeg" alt="" className="birthdayimage" />
          <span className="birthdaytext"><b>Sushanth A</b> and <b>3 other friends</b> have birthday today</span>
        </div>
        <img src="/Assets/ads.jpeg" alt="" className="rightbarimage" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
          <Online />
        </ul>
      </>
    )
  }
  const Profilerightbar = () => {
    return (
      <>
        {user.username !== cuser.username &&(
          <button className="rightbarfollowbutton" onClick={handleClick}>
            {followed?"Unfollow":"Follow"}
            {followed?<Remove/>:<Add/>}
          </button>
        )}
        <div className="rightbarinfo">
          <h4> user information</h4>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">city</span>
            <span className="rightbarinfovalue">{user.city}</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">from</span>
            <span className="rightbarinfovalue">{user.from}</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Realationship</span>
            <span className="rightbarinfovalue">{user.relationship === "1" ? "single" : user.relationship === "2" ? "commited" : "..."}</span>
          </div>

        </div>
        <h4>USER FRIENDS</h4>
        


          <div className="rightbarfollowings">
          {friends.map(friend => (
            <div className="rightbarfollowing">
              <Link to={"/profile/"+friend.username}>
              <img src={friend.profilePicture ? friend.profilePicture : "/Assets/noimage.png"} alt="" className="rightbarfollowingimage" />
              </Link>
              <span className="rightbarfollowingname">{friend.username}</span>
            </div>
            ))}
          </div>
       
      </>


    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        {user
          ? Profilerightbar()
          : Homerightbar()
        }
      </div>
    </div>
  )
}

export default Rightbar