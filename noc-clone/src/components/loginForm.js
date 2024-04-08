import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import config from "../config";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    // const data = { ...this.state.data };
    // data[input.name] = input.value;
    setPassword(e.target.value);
  };

  const getCurrentUser = () => {
    // return { username: "admin", password: "system" };

    try {
      if (!sessionStorage.getItem("username")) return null;
      return {
        name: sessionStorage.getItem("name"),
        username: sessionStorage.getItem("username"),
        password: sessionStorage.getItem("password"),
        customerId: sessionStorage.getItem("customerId"),
        customerName: sessionStorage.getItem("customerName"),
      };
    } catch (ex) {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   const response = await fetch(
      //     `https://ip.sisrtd.com/api/verifyCredentials?username=${username}&password=${password}`
      //   );
      //   const data = await response.json();

      const response = await axios.get(
        "https://ip.sisrtd.com/api/verifyCredentials",
        {
          params: {
            username: username,
            password: password,
          },
        }
      );

      const data = response.data;
      console.log(response.data);
      if (
        data.response &&
        response.responseStatus === "0" &&
        getCurrentUser()
      ) {
        sessionStorage.setItem("name", response.data.name);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("customerId", response.data.customerId);
        sessionStorage.setItem("customerName", response.data.customerName);
      } else {
        setTimeout(() => {
          navigate("/home");
        }, 2000);
        setMessage("Login successful");
        // setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
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
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
            autoComplete="password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
