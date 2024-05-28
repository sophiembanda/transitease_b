// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import '../css/signupcss/signup.css';

const SignupPage = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [message, setMessage] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignupActive(!isSignupActive);
    setMessage('');
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirm_password: formData.get('confirmPassword'),
    };

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setMessage(result.message || result.error);

      if (response.ok) {
        setUser({ name: data.name, username: data.username, email: data.email });
        navigate('/');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('An error occurred during signup. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setMessage(result.message || result.error);

      if (response.ok) {
        setUser({ username: data.username });
        navigate('/');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred during login. Please try again.');
    }
  };

  return (
    <section className="form">
      <div className={`container ${isSignupActive ? 'active' : ''}`}>
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="https://st4.depositphotos.com/20152108/22203/v/450/depositphotos_222031158-stock-illustration-transportation-coming-out-phone-screen.jpg"
              alt="Sign In"
            />
          </div>
          <div className="formBx">
            <form onSubmit={handleLogin}>
              <h2>Sign In</h2>
              <input type="text" name="username" placeholder="Username" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="submit" value="Login" />
              <p className="signup">
                Don't have an account?{' '}
                <button className="signupInbtn" type="button" onClick={toggleForm}>
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form onSubmit={handleSignup}>
              <h2>Create an Account</h2>
              <input type="text" name="name" placeholder="Name" required />
              <input type="text" name="username" placeholder="Username" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Enter Password" required />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
              <input type="submit" value="Sign Up" />
              <p className="signup">
                Already have an account?{' '}
                <button className="signupInbtn" type="button" onClick={toggleForm}>
                  Sign In
                </button>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="https://st4.depositphotos.com/20152108/22203/v/450/depositphotos_222031158-stock-illustration-transportation-coming-out-phone-screen.jpg"
              alt="Sign Up"
            />
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </section>
  );
};

export default SignupPage;
