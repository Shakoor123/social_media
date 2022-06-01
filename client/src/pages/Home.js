import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Leftbar from '../components/Leftbar/Leftbar'
import Feed from '../components/Feed/Feed'
import Rightbar from '../components/Rightbar/Rightbar'
import './Home.css'
function Home() {

  return (
    <div>
        <Navbar />
        <div className="homecontainer">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
        </div>
        
        
    </div>
  )
}

export default Home