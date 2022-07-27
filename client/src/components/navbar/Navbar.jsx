import React from 'react';
import './Navbar.css';
import {Person,Chat,Notifications, ExitToApp} from '@mui/icons-material';
import {AppContext} from '../../Context/AppContext'
import { useContext } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

  const {cuser}=useContext(AppContext);
  const logOut=()=>{
    localStorage.removeItem('user')
    window.location.reload()
  }
  return (
    <div className='topbarcontainer'>
      <div className="topbarleft">
       <Link to={"/"}> <span className='logo'>PlaceBook</span></Link>
      </div>
      
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">{cuser.username}</span>
        </div>
        <div className="logoutButton">
        {cuser?<ExitToApp onClick={logOut}></ExitToApp>:""}
        </div>
        <div className="topbaricons">
          <div className="topbariconitem">
            <Person/>
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem" style={{textDecoration:"none"}}>
          <Link to={'/messenger'}>

            <Chat/>
            <span className="topbariconbadge">1</span>
            </Link>

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