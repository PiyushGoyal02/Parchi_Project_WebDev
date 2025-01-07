import Navbar from "../Navbar";
import "../../CSS-CODE/LoginCSS.css";
import { useState } from "react";
import LoginImage from "../../Assets/Login.png";
import SignupImage from "../../Assets/Signup.png";

function Login() {
  const [activeButton, setActiveButton] = useState("login");
  const handleButtonClick = (button) => {
    setActiveButton(button); 
  };

  return (
    <div>
      <Navbar />
      <div className="Login-Signup-Texts">
        <button
          className={`button ${activeButton === "login" ? "active" : ""}`}
          onClick={() => handleButtonClick("login")}
        >
          Login
        </button>
        <button
          className={`button ${activeButton === "signup" ? "active" : ""}`}
          onClick={() => handleButtonClick("signup")}
        >
          Signup
        </button>
      </div>

      <div>
        {activeButton === "login" ? (
          <div className="LoginSideSection">
            <div>
              <img src={LoginImage} className="LoginImage-PNG" />
            </div>

            <div>
              <div className="login-container">
                <form className="login-form">
                  <h2>Login</h2>
                  <div className="form-group">
                    <label htmlFor="username">Mobile Number / Email ID</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Mobile Number / Email ID"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-options">
                    <div>
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember me for 30 days</label>
                    </div>
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="form-group">
                    <label htmlFor="otp-login">
                      Login with OTP instead of password
                    </label>
                  </div>
                  <button type="submit" className="login-button">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="SignupSection">
            <div>
              <img src={SignupImage} className="SignupImage-PNG" />
            </div>

            <div className="join-practo-container">
              <h2>Join Practo</h2>
              <p className="doctor-link">
                Are you a doctor? <a href="#">Register Here</a>
              </p>
              <form className="join-practo-form">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  required
                />

                <label htmlFor="mobileNumber">Mobile Number</label>
                <div className="mobile-input">
                  <select id="countryCode">
                    <option value="+91">+91 (IND)</option>
                  </select>
                  <input
                    type="text"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    required
                  />
                </div>

                <label htmlFor="password">Create Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />

                <div className="checkbox-container">
                  <input type="checkbox" id="promotions" defaultChecked />
                  <label htmlFor="promotions">
                    Receive relevant offers and promotional communication from
                    Practo
                  </label>
                </div>

                <p className="terms">
                  By signing up, I agree to <a href="#">terms</a>
                </p>

                <button type="submit" className="send-otp-btn">
                  Send OTP
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
