import "./Login.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import CircularProgress from "@mui/material/CircularProgress";
function LoginC() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { cuser, setCuser } = useContext(AppContext);
  const [loding, setloding] = useState(false);
  const [errtext, setErrtext] = useState(false);
  let navigate = useNavigate();
  const action = async () => {
    setErrtext(false);
    setloding(true);
    await axios
      .post(`${process.env.React_App_PUBLIC_URL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data) {
          setCuser(response.data);
          setloding(false);

          navigate("/");
        } else {
          console.log("email and password was wrong");
          setloding(false);

          navigate("/login");
        }
      })
      .catch((err) => {
        setErrtext(true);
        setloding(false);

        navigate("/login");
      });
  };

  return (
    <div className="main">
      <div className="signup">
        <div class="text-center">
          <h4 className="heading">Login</h4>

          <div class="form-outline mb-4">
            <input
              type="email"
              className="forminput"
              placeholder="Enter Your Email"
              id="form2Example1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-outline mb-4">
            <input
              type="password"
              className="forminput"
              placeholder="Enter your password"
              id="form2Example2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p style={{ color: "red", fontSize: 12 }}>
            {errtext && "Wrong email or password"}
          </p>

          <div className="bottom">
            <button type="button" onClick={action} class=" buttton">
              {loding ? (
                <CircularProgress color="success" style={{ size: "20px" }} />
              ) : (
                "Login"
              )}
            </button>
            <br></br>
          </div>
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            <span className="signup-text">Don't have an Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginC;
