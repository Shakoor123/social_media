import { MoreVert, ThumbUp } from '@mui/icons-material'
import React,{useState} from 'react'
import './Post.css'
function Post() {
    const [like, setLike] = useState(30)
    const [updateLike, setUpdateLike] = useState(false)

    const  likehandler=()=>{
        setUpdateLike(!updateLike?true:false)
        setLike(updateLike?like-1:like+1)
    }
  return (
    <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src="/Assets/noimage.png" className='postprofileimage' alt="" />
                    <span className="postusername">Bahas CBK</span>
                    <span className="postdate">5 min ago</span>
                </div>
                <div className="posttopright">
                    <MoreVert/>
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">Hey! this is my first post</span>
                <img src="/Assets/noimage.png" className='postimage' alt="" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <ThumbUp className='likeicon'
                    onClick={likehandler}
                    htmlColor={updateLike?"blue":""}/>
                    <span className="postlikecounter">{like} peoples like it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext">9 comments</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Post