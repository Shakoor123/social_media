import { useContext } from 'react';
import { useState } from 'react'
import {AppContext} from '../../Context/AppContext'
import './Form.css'

const Form = () => {
  const [profile, setProfile] = useState("");
  const [cover, setCover] = useState("")
  const {cuser}=useContext(AppContext);
  const [desc, setDesc] = useState(cuser.desc)
  const [city, setCity] = useState(cuser.city)
  const [from, setFrom] = useState(cuser.from)
  const [relatonship, setRelatonship] = useState(cuser.relatonship)
  console.log(cuser);

  const updateDetails=()=>{
    console.log(profile);
    console.log(cover);
    console.log(desc);
    console.log(city);
    console.log(from);
    console.log(relatonship);
  }
  return (
    <div className='form'>
      <div className="container">
        <h1 className="title">Edit Your Profile</h1>
        <div className="inputContainers">
          <label htmlFor="profile">
            <img src={profile ? URL.createObjectURL(profile) :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6wRWOjhYe9HP1hvqWiY_x4tDvhbtNcvKUw&usqp=CAU"} alt="" className="profileImage" />

          </label>
          <input type="file" id="profile" onChange={(e)=>setProfile(e.target.files[0])} style={{display:"none"}} />
        </div>
        <div className="inputContainers">
          <label htmlFor="cover">
            <img src={cover ? URL.createObjectURL(cover) :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAP-Y-pqZa0sbC0wod3bEwOohUAVB_CQ5iBg&usqp=CAU"} alt="" className="coverImage" />

          </label>
          <input type="file" id="cover" onChange={(e)=>setCover(e.target.files[0])} style={{display:"none"}} />
        </div>
        <div className="inputContainer">
          <span className='span'>desc</span>
          <input required type="text" onChange={(e)=>setDesc(e.target.value)} value={desc} className="input" />
        </div>
        <div className="inputContainer">
          <span className='span'>city</span>
          <input required type="text" onChange={(e)=>setCity(e.target.value)} value={city} className="input" />
        </div>
        <div className="inputContainer">
          <span className='span'>from</span>
          <input required type="text" onChange={(e)=>setFrom(e.target.value)} value={from} className="input" />
        </div>
        <div className="inputContainer" >
          <span className='span'>relatonship</span>
          <select required name="" id="" className='input' onChange={(e)=>setRelatonship(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>

          </select>
        </div>
        <button className="button" onClick={updateDetails}>Submit</button>
       
      </div>
    </div>
  )
}

export default Form