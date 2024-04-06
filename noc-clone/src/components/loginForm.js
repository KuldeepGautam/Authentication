import React, { useState } from "react";
<<<<<<< HEAD
// import config from "../config";
// import axios from "axios";

function LoginForm() {
=======

const LoginForm = () => {
>>>>>>> 7b65324f918bffbb03475c4f5a0472462733a231
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

      if (data.success) {
        setMessage("Login successful");
        // Redirect or perform any other action upon successful login
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
=======
      console.log(data);
      if (data.success) {
        setMessage("Data Successfully submitted.....!!");
      } else setMessage("Failed......!");
    } catch (er) {
>>>>>>> 7b65324f918bffbb03475c4f5a0472462733a231
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h3>Login Form</h3>
<<<<<<< HEAD
      {message && <p>{message}</p>}
=======
      <p>{message}</p>
>>>>>>> 7b65324f918bffbb03475c4f5a0472462733a231
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
<<<<<<< HEAD
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
=======
            value={username}
            onChange={handleChangeUsername}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Name</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};
>>>>>>> 7b65324f918bffbb03475c4f5a0472462733a231

export default LoginForm;
