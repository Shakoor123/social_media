import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Leftbar from "../components/Leftbar/Leftbar";
import Feed from "../components/Feed/Feed";
import Rightbar from "../components/Rightbar/Rightbar";
import "./Home.css";
function Home() {
  const [right, setRight] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="homecontainer">
        <Leftbar />
        {right ? " " : <Feed setRight={setRight} />}
        {right ? <Rightbar /> : ""}
      </div>
    </div>
  );
}

export default Home;
