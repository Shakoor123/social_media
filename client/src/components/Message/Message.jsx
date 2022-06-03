import React from 'react'
import './Message.css'
function Message({own}) {
  return (
    <div className={own?'message own':'message'}>
        <div className="messageTop">
            <img src="/Assets/noimage.png" className='messageImg' alt="" />
            <p className="messageText">hellow first message lore</p>

        </div>
        <div className="messageBottom">1 hr ago</div>
    </div>
  )
}

export default Message