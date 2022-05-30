import './Login.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function LoginC() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const action=()=>{
    axios.post("http://localhost:4000/login",{
      
      email:email,
      password:password
    }).then((response)=>{
      console.log(response.data);
      
      navigate('/')
    }
      )
  }

  return (
    <div class="text-center">
      <h4>LOG IN</h4>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" 
    onChange={(e)=>setEmail(e.target.value)}
    /><br/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>  

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2"  
     onChange={(e)=>setPassword(e.target.value)}
    /><br/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <button type="button" onClick={action} class="btn btn-primary btn-block mb-4">Log in</button>
    </div>
  )
}

export default LoginC
