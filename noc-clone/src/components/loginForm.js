import React, { useState } from "react";
// import config from "../config";
// import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://ip.sisrtd.com/api/verifyCredentials?username=${username}&password=${password}`
      );
      const data = await response.json();
<<<<<<< HEAD
      console.log(response);
      console.log(data);
=======

>>>>>>> 8aa417bd1f45b61e8246741e3c53267fcaedfea9
      if (data.success) {
        setMessage("Login successful");
        // Redirect or perform any other action upon successful login
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h3>Login Form</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChangeUsername}
            autoComplete="username"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            autoComplete="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
