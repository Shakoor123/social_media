import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import "./Form.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [nuser, setNuser] = useState({});
  const { cuser, setCuser } = useContext(AppContext);

  useEffect(() => {
    const setnuser = async () => {
      const res = await axios.get(
        `${process.env.React_App_PUBLIC_URL}/user?username=${cuser.username}`
      );
      setCuser(res.data);
      setNuser(res.data);
    };
    setnuser();
  }, []);
  let navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [cover, setCover] = useState("");
  const [profileUrl, setProfileUrl] = useState();
  const [coverUrl, setCoverUrl] = useState("");
  const [desc, setDesc] = useState(nuser.desc);
  const [city, setCity] = useState("");
  const [from, setFrom] = useState("");
  const [relatonship, setRelatonship] = useState();

  const updateDetails = async () => {
    if (profile) {
      const data = new FormData();
      data.append("file", profile);
      data.append("upload_preset", "g11urwum");
      data.append("cloud_name", "desv0ugoq");
      await fetch("  https://api.cloudinary.com/v1_1/desv0ugoq/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data.url);
          setProfileUrl(`${data.url}`);
        })
        .then(async () => {
          profileUrl.toString();
        })
        .catch((err) => console.log(err));
    }
    try {
      let formData = new FormData();
      formData.append("file", profile.data);
      await axios
        .put(`${process.env.React_App_PUBLIC_URL}/user/${cuser._id}`, {
          userId: cuser._id,
          desc,
          city,
          from,
          relatonship,
          profilePicture: profileUrl,
        })
        .then(navigate(`/profile/${cuser.username}`));
    } catch (err) {
      console.log(err);
    }
  };
  const setprofile = async () => {
    if (profile) {
      const data = new FormData();
      data.append("file", profile);
      data.append("upload_preset", "g11urwum");
      data.append("cloud_name", "desv0ugoq");
      await fetch("  https://api.cloudinary.com/v1_1/desv0ugoq/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProfileUrl(data.url);
        })
        .then(async () => {
          profileUrl.toString();
          console.log(profileUrl);
          // await axios
          //   .put(`${process.env.React_App_PUBLIC_URL}/user/${cuser._id}`, {
          //     userId: cuser._id,
          //     profilePicture: profileUrl,
          //   })
          //   .then(() => {
          //     console.log(profileUrl);
          //     navigate(`/profile/${cuser.username}`);
          //   });
        })
        .catch((err) => console.log(err));
    }
  };
  const setcover = () => {};
  return (
    <div className="form">
      <div className="container">
        <h1 className="title">Edit Your Profile</h1>
        <div className="inputContainers">
          <label htmlFor="profile">
            <img
              src={
                profile
                  ? URL.createObjectURL(profile)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6wRWOjhYe9HP1hvqWiY_x4tDvhbtNcvKUw&usqp=CAU"
              }
              alt=""
              className="profileImage"
            />
          </label>
          <input
            type="file"
            id="profile"
            onChange={(e) => setProfile(e.target.files[0])}
            style={{ display: "none" }}
          />
          <button className="send" onClick={setprofile}>
            send
          </button>
        </div>
        <div className="inputContainers">
          <label htmlFor="cover">
            <img
              src={
                cover
                  ? URL.createObjectURL(cover)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAP-Y-pqZa0sbC0wod3bEwOohUAVB_CQ5iBg&usqp=CAU"
              }
              alt=""
              className="coverImage"
            />
          </label>
          <input
            type="file"
            id="cover"
            onChange={(e) => setCover(e.target.files[0])}
            style={{ display: "none" }}
          />
          <button className="send" onClick={setcover}>
            send
          </button>
        </div>

        <span className="title">Welcome {cuser.username}</span>
        <div className="inputContainer">
          <span className="span">desc</span>
          <input
            required
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            className="input"
          />
        </div>
        <div className="inputContainer">
          <span className="span">city</span>
          <input
            required
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="input"
          />
        </div>
        <div className="inputContainer">
          <span className="span">from</span>
          <input
            required
            type="text"
            onChange={(e) => setFrom(e.target.value)}
            className="input"
          />
        </div>
        <div className="inputContainer">
          <span className="span">relatonship</span>
          <select
            required
            name=""
            id=""
            className="input"
            onChange={(e) => setRelatonship(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <button className="button" onClick={updateDetails}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
