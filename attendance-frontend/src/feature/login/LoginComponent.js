import React from "react";
import "./login.css";

function Login() {
  return (
    <div class="container">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div class="containers">
        <div class="intro">
          <h3>What is Lorem Ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
        <div class="signin-form">
          <div>
            <h1 class="signin">Sign in</h1>
          </div>
          <div class="input-field">
            <div>
              <label class="label">Email</label>
              <input
                type="text"
                id="email"
                placeholder="example@mydiary.com"
                required
              ></input>
            </div>
          </div>
          <div class="input-field">
            <div>
              <label class="label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="*****"
                required
              ></input>
            </div>
          </div>
          <a href="/selection">
            <button>Sign in</button>{" "}
          </a>
          <div class="go-signup">
            Are you a guardian?{" "}
            <a class="link" href="#">
              Sign in here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
