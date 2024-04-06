import React, { useState } from "react";

const LoginForm = () => {
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
      console.log(response);
      console.log(data);
      if (data.success) {
        setMessage("Data Successfully submitted.....!!");
      } else setMessage("Failed......!");
    } catch (er) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h3>Login Form</h3>
      <p>{message}</p>
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
          <label>Name</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            autoComplete="password"
          />
        </div>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
