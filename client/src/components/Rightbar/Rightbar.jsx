import React, { useContext, useEffect, useState } from "react";
import Online from "../online/Online";
import "./Rightbar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { Add, Remove } from "@mui/icons-material";
function Rightbar({ user, setRight }) {
  const [friends, setFriends] = useState([]);
  const { cuser } = useContext(AppContext);
  const [followed, setFollowed] = useState(false);
  const [all, setAll] = useState([]);
  useEffect(() => {
    setFollowed(cuser.followings.includes(user?._id));
  }, [cuser, user]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        await axios
          .get(`${process.env.React_App_PUBLIC_URL}/user/friends/${user?._id}`)
          .then((res) => {
            setFriends(res.data);
            console.log(friends);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
  const handleClick = async () => {
    try {
      if (followed) {
        await axios
          .put(
            `${process.env.React_App_PUBLIC_URL}/user/${user._id}/unfollow`,
            {
              userId: cuser._id,
            }
          )
          .then(
            await axios
              .delete(
                `${process.env.React_App_PUBLIC_URL}/conversation/${cuser._id}/${user._id}`
              )
              .then(console.log("conversation reset"))
          );
      } else {
        await axios
          .put(`${process.env.React_App_PUBLIC_URL}/user/${user._id}/follow`, {
            userId: cuser._id,
          })
          .then(
            await axios
              .post(`${process.env.React_App_PUBLIC_URL}/conversation`, {
                senderId: cuser._id,
                receverId: user._id,
              })
              .then(console.log("conversation set"))
          );
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };
  useEffect(() => {
    const getAll = async () => {
      const all = await axios.get(
        `${process.env.React_App_PUBLIC_URL}/user/users`
      );
      setAll(all.data);
    };
    getAll();
  }, []);

  const Homerightbar = () => {
    return (
      <>
        <span
          className="home"
          onClick={() => {
            setRight(false);
          }}
        >
          home
        </span>
        <div className="birthdaycontainer">
          <img src="/Assets/gift.jpeg" alt="" className="birthdayimage" />
          <span className="birthdaytext">
            <b>Sushanth A</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src="/Assets/ads.jpeg" alt="" className="rightbarimage" />
        <h4 className="rightbartitle">All Users</h4>
        <ul className="rightbarfriendlist">
          {all.map((a) => (
            <Online person={a} key={a._id} />
          ))}
        </ul>
      </>
    );
  };
  const Profilerightbar = () => {
    return (
      <>
        {user.username !== cuser.username && (
          <button className="rightbarfollowbutton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <div className="rightbarinfo">
          <h4> user information</h4>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">city</span>
            <span className="rightbarinfovalue">{user.city}</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">from</span>
            <span className="rightbarinfovalue">{user.from}</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Realationship</span>
            <span className="rightbarinfovalue">
              {user.relationship === "1"
                ? "single"
                : user.relationship === "2"
                ? "commited"
                : "..."}
            </span>
          </div>
        </div>
        <h4>USER FRIENDS</h4>

        <div className="rightbarfollowings">
          {friends.map((friend) => (
            <div className="rightbarfollowing">
              <Link to={"/profile/" + friend.username}>
                <img
                  src={
                    friend.profilePicture
                      ? friend.profilePicture
                      : "/Assets/noimage.png"
                  }
                  alt=""
                  className="rightbarfollowingimage"
                />
              </Link>
              <span className="rightbarfollowingname">{friend.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        {user ? Profilerightbar() : Homerightbar()}
      </div>
    </div>
  );
}

export default Rightbar;
