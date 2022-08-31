import React, { useContext, useState } from "react";
import "./Share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@mui/icons-material";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
function Share() {
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();
  const [imgurl, setImgurl] = useState();
  const { cuser } = useContext(AppContext);
  const sharehandler = async () => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "g11urwum");
      data.append("cloud_name", "desv0ugoq");
      await fetch("  https://api.cloudinary.com/v1_1/desv0ugoq/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setImgurl(data.url);
        })
        .then(async () => {
          imgurl.toString();
          await axios
            .post(`${process.env.React_App_PUBLIC_URL}/post/`, {
              userId: cuser._id,
              desc: desc,
              img: imgurl,
            })
            .then(() => {
              window.location.reload();
            });
        })
        .catch((err) => console.log(err));
    } else if (desc) {
      await axios
        .post(`${process.env.React_App_PUBLIC_URL}/post/`, {
          userId: cuser._id,
          desc: desc,
        })
        .then(() => {
          window.location.reload();
        });
    } else {
      alert("select text or image");
    }
  };

  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img
            src={
              cuser.profilePicture ? cuser.profilePicture : "Assets/noimage.png"
            }
            alt=""
            className="shareimage"
          />
          <input
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder={"what is your mind " + cuser.username + "  ?"}
            className="shareinput"
          />
        </div>
        <hr className="sharehr" />
        {image && (
          <div className="shareimagecontainer">
            <img src={URL.createObjectURL(image)} alt="" className="shareimg" />
            <Cancel
              className="sharecancel"
              onClick={() => {
                setImage(null);
              }}
            />
          </div>
        )}
        <div className="sharebottom">
          <div className="shareoptions">
            <label className="shareoption" htmlFor="file">
              <PermMedia htmlColor="tomato" className="shareicon" />
              <span className="shareoptiontext">Photo or video</span>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </label>
            <div className="shareoption">
              <Label htmlColor="blue" className="shareicon" />
              <span className="shareoptiontext">Tag</span>
            </div>
            <div className="shareoption">
              <Room htmlColor="green" className="shareicon" />
              <span className="shareoptiontext">Location</span>
            </div>
            <div className="shareoption">
              <EmojiEmotions htmlColor="goldenrod" className="shareicon" />
              <span className="shareoptiontext">Feelings</span>
            </div>
          </div>
          <button className="sharebutton" onClick={sharehandler}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
