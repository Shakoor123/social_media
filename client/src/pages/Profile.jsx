import React from 'react'
import Leftbar from '../components/Leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'
import Rightbar from '../components/Rightbar/Rightbar'
import Feed from '../components/Feed/Feed'
import './Profile.css'
function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Leftbar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className='profilecover'>
              <img src="/Assets/ads.jpeg" alt="" className="profilecoverimage" />
              <img src="/Assets/noimage.png" alt="" className="profileuserimage" />
            </div>
            <div className="profileinfo">
              <h4 className="profileinfoname">shakoor</h4>
              <span className="profileinfodesc">hellow friends</span>
            </div>
          </div>
          <div className="profilerightbottom">
           <Feed username="shakoor"/>
            <Rightbar Profile={"pro"}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile