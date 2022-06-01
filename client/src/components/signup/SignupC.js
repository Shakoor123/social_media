import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [retypepassword, setRetypepassword] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate();
  const action=()=>{
    if(password==retypepassword)
    {
    axios.post(`${process.env.React_App_PUBLIC_URL}/auth`,{
      username:username,
      email:email,
      password:password
    }).then((response)=>{
      if(response.data){
        navigate('/login')
      }else{
        console.log(response);

      }
    })
  }else{
    alert("password did'n match")
  }
  }


  return (
<div class="text-center">
      <h4>Signup</h4>
  <div class="form-outline mb-4">
    <input type="text" className='forminput' placeholder='Enter Your UserName' id="form2Example1" 
    onChange={(e)=>setUsername(e.target.value)}
    />
  </div> 
  <div class="form-outline mb-4">
    <input type="email" className='forminput' placeholder='Enter Your Email' id="form2Example1" 
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>   

  <div class="form-outline mb-4">
    <input type="password" className='forminput' placeholder='Enter your password' id="form2Example2"  
     onChange={(e)=>setPassword(e.target.value)}
    />
  </div>
  <div class="form-outline mb-4">
    <input type="password" className='forminput' placeholder='Re type your password' id="form2Example2"  
     onChange={(e)=>setRetypepassword(e.target.value)}
    />
  </div>
  <button type="button" onClick={action} class="btn btn-primary btn-block mb-4">Sign up</button>
    </div>
  )
}

export default Signup