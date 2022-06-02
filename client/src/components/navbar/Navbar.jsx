import React from 'react';
import './Navbar.css';
import {Search,Person,Chat,Notifications} from '@mui/icons-material';
import {AppContext} from '../../Context/AppContext'
import { useContext } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

  const {cuser}=useContext(AppContext);

  return (
    <div className='topbarcontainer'>
      <div className="topbarleft">
       <Link to={"/"}> <span className='logo'>PlaceBook</span></Link>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
        <Search className='serchicon' />
        <input placeholder='serch for friend' className="searchinput" />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">{cuser.username}</span>
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
        <Link to={`/profile/${cuser.username}`}>
        <img src={cuser.profilePicture?cuser.profilePicture:"/Assets/noimage.png"} alt="" className="topbarimage" />
        </Link>
      </div>

    </div>
  )
}

export default Navbar