import React, { useState } from "react";
import "../css/signupcss/signup.css";

const SignupPage = () => {
  // State to manage which form is active (login or signup)
  const [isSignupActive, setIsSignupActive] = useState(false);
  // State to manage messages from the server (success or error)
  const [message, setMessage] = useState("");

  // Function to toggle between login and signup forms
  const toggleForm = () => {
    setIsSignupActive(!isSignupActive);
    setMessage("");
  };

  // Function to handle signup form submission
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const form = e.target; // Get the form element
    const formData = new FormData(form); // Create a FormData object from the form
    const data = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirm_password: formData.get("confirmPassword")
    };

    // Send a POST request to the signup endpoint
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Convert the data object to JSON
    });

    // Parse the JSON response from the server
    const result = await response.json();
    // Set the message state to display the server's response
    setMessage(result.message || result.error);
  };

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const form = e.target; // Get the form element
    const formData = new FormData(form); // Create a FormData object from the form
    const data = {
      username: formData.get("username"),
      password: formData.get("password")
    };

    // Send a POST request to the login endpoint
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Convert the data object to JSON
    });

    // Parse the JSON response from the server
    const result = await response.json();
    // Set the message state to display the server's response
    setMessage(result.message || result.error);
  };

  return (
    <section className="form">
      <div className={`container ${isSignupActive ? "active" : ""}`}>
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
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input type="submit" value="Login" />
              <p className="signup">
                Don't have an account?{" "}
                <button
                  className="signupInbtn"
                  type="button"
                  onClick={toggleForm}
                >
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
              <input
                type="text"
                name="username"
                placeholder="Username" required
              />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
              <input type="submit" value="Sign Up" />
              <p className="signup">
                Already have an account?{" "}
                <button
                  className="signupInbtn"
                  type="button"
                  onClick={toggleForm}
                >
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
