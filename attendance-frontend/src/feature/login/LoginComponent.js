import { authenticate, isAuth } from "../../helpers/Auth";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import "./login.css";

export default function Login() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  // console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (email && password) {
      console.log("Provided");
      axios
        .post("http://localhost:8080/api/login", {
          email,
          password,
        })
        .then((res) => {
          // console.log(res);
          authenticate(res, () => {
            setFormData({
              ...formData,
              email: "",
              password: "",
            });
          });
          isAuth() ? navigate("/selection") : navigate("/");
        })
        .catch((err) => {
          setFormData({
            ...formData,
            email: "",
            password: "",
          });
        });
    }
  };

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

        <form onSubmit={handleSubmit} class="signin-form">
          <div>
            <h1 class="signin">Log in</h1>
          </div>
          <div class="input-field">
            <div>
              <label class="label">Email</label>
              <input
                type="text"
                id="email"
                placeholder="example@attendance.com"
                name="email"
                onChange={handleChange("email")}
                value={email}
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
                name="password"
                onChange={handleChange("password")}
                value={password}
                required
              ></input>
            </div>
          </div>
          {/* <a href="/selection"> */}
          <button type="submit">Log in</button> {/* </a> */}
          <div class="go-signup">
            Are you a guardian?{" "}
            <a class="link" href="/guardian">
              Log in here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
