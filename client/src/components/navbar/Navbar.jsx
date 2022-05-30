import React from 'react'
import './Navbar.css'
import {Search,Person,Chat,Notifications} from '@mui/icons-material';
function Navbar() {
  return (
    <div className='topbarcontainer'>
      <div className="topbarleft">
        <span className='logo'>PlaceBook</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
        <Search className='serchicon' />
        <input placeholder='serch for friend' className="searchinput" />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">timeline</span>

        </div>
        <div className="topbaricons">
          <div className="topbariconitem">
            <Person/>
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <Chat/>
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <Notifications/>
            <span className="topbariconbadge">1</span>
          </div>
        </div>
        <img src="/Assets/noimage.png" alt="" className="topbarimage" />
      </div>

    </div>
  )
}

export default Navbar