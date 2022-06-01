import React,{useEffect, useState} from 'react'
import Leftbar from '../components/Leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'
import Rightbar from '../components/Rightbar/Rightbar'
import Feed from '../components/Feed/Feed'
import axios from 'axios'

import './Profile.css'
function Profile() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser=async()=>{
        const res=await axios.get(`/user?username=shakoor1`);
        setUser(res.data)
        
      }
      getUser();
}, [])

  return (
    <>
      <Navbar />
      <div className="profile">
        <Leftbar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className='profilecover'>
              <img src="/Assets/nocover.jpeg" alt="" className="profilecoverimage" />
              <img src="/Assets/noimage.png" alt="" className="profileuserimage" />
            </div>
            <div className="profileinfo">
              <h4 className="profileinfoname">{user.username}</h4>
              <span className="profileinfodesc">{user.desc}</span>
            </div>
          </div>
          <div className="profilerightbottom">
           <Feed username={user.username}/>
            <Rightbar user={user}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile