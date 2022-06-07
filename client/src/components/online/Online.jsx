import React from 'react'
import { Link } from 'react-router-dom'
import './Online.css'
function Online({person}) {
  return (
    <div><li className="rightbarfriend">
    <div className="rightbarprofileimagecontainer">
    <Link to={`/profile/${person.username}`}>
      <img src={person.profilePicture?person.profilePicture:"/Assets/noimage.png"} alt="" className="rightbarprofileimage" />
    </Link>
    </div>
    <span className="rightbarusername">{person?person.username:""}</span>
  </li></div>
  )
}

export default Online