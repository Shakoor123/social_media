import React from 'react'
import "./Leftbar.css"
import {RssFeed,Chat,VideoSettings, Groups, School,} from '@mui/icons-material';
import Closefriend from '../Closefriend/Closefriend';

function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="leftbarwrapper">
        <ul className="leftbarlist">
          <li className="leftbarlistitem">
            <RssFeed className='leftbaricon'/>
            <span className="leftbarlistitemtext">Feed</span>
          </li>
          <li className="leftbarlistitem">
            <Chat className='leftbaricon'/>
            <span className="leftbarlistitemtext">Chat</span>
          </li>
          <li className="leftbarlistitem">
            <VideoSettings className='leftbaricon'/>
            <span className="leftbarlistitemtext">VideoSettings</span>
          </li>
          <li className="leftbarlistitem">
            <Groups className='leftbaricon'/>
            <span className="leftbarlistitemtext">Groups</span>
          </li>
          <li className="leftbarlistitem">
            <School className='leftbaricon'/>
            <span className="leftbarlistitemtext">School</span>
          </li>
        </ul>
        <button className='leftbarbutton'>Show more</button>
        <hr className="leftbarhr" />
        <ul className="leftbarfriendlist">
          <Closefriend/>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar