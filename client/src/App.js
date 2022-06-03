import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './pages/Profile';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';
import Messenger from './pages/Messenger';
function App() {
  const {cuser} =useContext(AppContext)
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/"  element={cuser?<Home />:<Login/>} />
      <Route path="/messenger"  element={cuser?<Messenger />:<Login/>} />
      <Route path="/login" element={cuser?<Home/>:<Login />} />
      <Route path="/signup" element={cuser?<Home/>:<Signup />} />
      <Route path="/profile/:username" element={cuser?<Profile />:<Login/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
