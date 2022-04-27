import "./secondary.css";
import React from "react";
import { Link } from "react-router-dom";

function Secondary() {
  return (
    <div class="containeri">
      <div class="header">
        <div class="logo"></div>
      </div>
      <div class="title">Secondary</div>
      <div class="stories">
        <div class="story">
          <div class="content">
            <Link to="/table" id="link">
              {" "}
              S 1{" "}
            </Link>
            {/* <a href="/table" id="link">
              S 1
            </a> */}
          </div>
        </div>

        <div class="story">
          <div class="content">
            <Link to="/table" id="link">
              {" "}
              S 2{" "}
            </Link>
            {/* <a href="/table" id="link">
              S 2
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/table" id="link">
              {" "}
              S 3{" "}
            </Link>
            {/* <a href="/table" id="link">
              S 3
            </a> */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/table" id="link">
              {" "}
              S 4{" "}
            </Link>
            {/* <a href="/table" id="link">
              S 4
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/table" id="link">
              {" "}
              S 5{" "}
            </Link>
            {/* <a href="/table" id="link">
              S 5
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/table" id="link">
              {" "}
              S 6{" "}
            </Link>
            {/* <a href="/table" id="link">
              S 6
            </a>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondary;
