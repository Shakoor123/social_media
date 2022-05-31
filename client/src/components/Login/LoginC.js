import './Login.css'
import { useContext, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {AppContext} from '../../Context/AppContext'
function LoginC() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const {cuser,setCuser}=useContext(AppContext)

  const action=async()=>{
    await axios.post("/auth/login",{  
      email:email,
      password:password
    }).then((response)=>{
      if(response.data){
        console.log(response.data);
        alert(cuser)
      }else{
        alert(cuser)

      }
    }
      )
  }

  return (
    <div class="text-center">
      <h4>LOG IN</h4>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" placeholder='Enter email'
    onChange={(e)=>setEmail(e.target.value)}
    /><br/>
  </div>  

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" placeholder='Enter password'
     onChange={(e)=>setPassword(e.target.value)}
    /><br/>
  </div>

  <button type="button" onClick={action} class="btn btn-primary btn-block mb-4">Log in</button>
    </div>
  )
}

export default LoginC
