import "./primary.css";
import React from "react";
import { Link } from "react-router-dom";

function Primary() {
  return (
    <div class="containeri">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div class="title">Primary</div>
      <div class="stories">
        <div class="story">
          <div class="content">
            <Link to="/P1" id="link">
              p1
            </Link>
            {/* <a href="/table" id="link">
              P 1
            </a> */}
          </div>
        </div>

        <div class="story">
          <div class="content">
            <Link to="/p2" id="link">
              {" "}
              P 2{" "}
            </Link>
            {/* <a href="/table" id="link">
              P 2
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/p3" id="link">
              {" "}
              P 3{" "}
            </Link>
            {/* <a href="/table" id="link">
              P 3
            </a> */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/p4" id="link">
              {" "}
              P 4{" "}
            </Link>
            {/* <a href="/table" id="link">
              P 4
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/p5" id="link">
              {" "}
              P 5{" "}
            </Link>
            {/* <a href="/table" id="link">
              P 5
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/p6" id="link">
              {" "}
              P 6{" "}
            </Link>
            {/* <a href="/table" id="link">
              P 6
            </a>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Primary;
