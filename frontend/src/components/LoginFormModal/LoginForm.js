import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  // DEMO LOG IN
  const demoLogin = () => {
    setCredential("demo@user.io");
    setPassword("password");
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-top">
          <h1>Log In</h1>
        </div>
        <ul className="login-error">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="login-wrap">
          <div className="login-info">
            <label> Email </label>
            <input
              // placeholder="Enter your email address"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>

          <div className="login-info">
            <label>Password </label>
            <input
              // placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit">Log In</button>
          <button id="demo-btn" onClick={demoLogin}>
            Demo Login
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
