import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "store/actions/Auth";
import axios from "axios";


const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { username, email, password, re_password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(username, email, password, re_password);
      setAccountCreated(true);
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (accountCreated) {
    return <Redirect to="/login" />;
  }



  document.addEventListener("DOMContentLoaded", function (history) {
    const signUpButton = document.getElementById('signUp');
    const container = document.getElementById('container');
    const signInButton = document.getElementById('signIn');
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
});


  return (
    <>
      <div className="auth-container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={onSubmit}>
            <h3>Create Account</h3>
            <div className="social-container">
              <a className="social" onClick={continueWithGoogle}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a className="social" onClick={continueWithGoogle}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a className="social" onClick={continueWithGoogle}>
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Last Name*"
              name="last_name"
              value={username}
              onChange={(e) => onChange(e)}
              required
              className='input'
            />
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
              className='input'
            />
            <input
              type="password"
              placeholder="Confrim Password"
              name="re_password"
              value={re_password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
              className='input'
            />
            <input
              type="password"
              placeholder="Confrim Password"
              name="re_password"
              value={re_password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
              className='input'
            />
            <button className="auth-button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="/auth/jwt/create/" method="POST">
            <h1>Sign in</h1>
            <div className="social-container">
              <a className="social" onClick={continueWithGoogle}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a className="social" onClick={continueWithGoogle}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a className="social" onClick={continueWithGoogle}>
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input className='input' type="email" placeholder="Email" />
            <input className='input' type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className="auth-button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="auth-button" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="auth-button" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
