import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [retypepassword, setRetypepassword] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate();
  const action = () => {
    if (password == retypepassword) {
      axios.post(`${process.env.React_App_PUBLIC_URL}/auth`, {
        username: username,
        email: email,
        password: password
      }).then((response) => {
        if (response.data) {
          navigate('/login')
        } else {
          console.log(response);

        }
      })
    } else {
      alert("password did'n match")
    }
  }


  return (
    <div className="main">
    <div className="signup">
      <div class="text-center">
        <h4 className='heading'>Signup</h4>
        <div class="form-outline mb-4">
          <input type="text" className='forminput' placeholder='Enter Your UserName' id="form2Example1"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <input type="email" className='forminput' placeholder='Enter Your Email' id="form2Example1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="form-outline mb-4">
          <input type="password" className='forminput' placeholder='Enter your password' id="form2Example2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <input type="password" className='forminput' placeholder='Re type your password' id="form2Example2"
            onChange={(e) => setRetypepassword(e.target.value)}
          />
          
        </div>
        
        <button type="button" onClick={action} class=" buttton">Sign up</button><br></br>
        <Link to={'/login'} style={{textDecoration:'none'}}>
        <span className='signup-text '>Already have an Account</span>
        </Link>
      </div>
      
    </div>
    </div>
  )
}

export default Signup