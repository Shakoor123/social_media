import React from 'react'
import './ChatOnline.css'
function ChatOnline() {
    return (
        <div className='ChatOnline'>
            <div className="ChatOnlineFriend">
                <div className="ChatOnlineImgContainer">
                    <img src="/Assets/noimage.png" alt="" className="ChatOnlineImg" />
                    <div className='ChatOnlineBadge'></div>
                </div>
                <span className="chatOnlineName">samuel wilson</span>
            </div>
        </div>
    )
}

export default ChatOnline