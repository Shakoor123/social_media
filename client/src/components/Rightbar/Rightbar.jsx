import React from 'react'
import Online from '../online/Online'
import './Rightbar.css'
function Rightbar({user}) {
  const Homerightbar=()=>{
    return(
    <>
      <div className="birthdaycontainer">
          <img src="/Assets/gift.jpeg" alt="" className="birthdayimage" />
          <span className="birthdaytext"><b>Sushanth A</b> and <b>3 other friends</b> have birthday today</span>
        </div>
        <img src="/Assets/ads.jpeg" alt="" className="rightbarimage" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
          <Online/>
        </ul>
    </>
    )
  }
  const Profilerightbar=()=>{
    return(
        <>
          <div className="rightbarinfo">
            <h4>heloow user information</h4>
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
              <span className="rightbarinfovalue">{user.relationship==1?"single":user.relationship==2?"commited":"-"}</span>
            </div>
            
          </div>
          <h4>USER FRIENDS</h4>
            <div className="rightbarfollowings">
              <div className="rightbarfollowing">
                <img src="/Assets/noimage.png" alt="" className="rightbarfollowingimage" />
                <span className="rightbarfollowingname">john carter</span>
              </div>
            </div>
        </>


    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        {user
        ?Profilerightbar()
        :Homerightbar()
        }
      </div>
    </div>
  )
}

export default Rightbar