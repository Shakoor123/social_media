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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
