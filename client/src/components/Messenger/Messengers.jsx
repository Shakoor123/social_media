import React from 'react'
import ChatOnline from '../ChatOnline/ChatOnline'
import Conversations from '../Conversations/Conversations'
import Message from '../Message/Message'
import "./Messenger.css"
function Messengers() {
  return (
    <div className='messenger'>
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder='serch for friends...' className="chatMenuInput" />
          <Conversations/>
          <Conversations/>
          <Conversations/>
          <Conversations/>
          <Conversations/>
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message/>
            <Message own={true}/>
            <Message/>
            
          </div>
          <div className="chatBoxBottom">
            <textarea name="" className='chatMessageinput' placeholder='Writte something'></textarea>
            <button className='chatSubmitButton'>send</button>
          </div>
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline/>
          
        </div>
      </div>

    </div>
  )
}

export default Messengers