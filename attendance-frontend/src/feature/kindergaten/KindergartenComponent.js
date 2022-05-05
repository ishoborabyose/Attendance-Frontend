import "./kindergaten.css";
import React from "react";
import { Link } from "react-router-dom";

function Kindergarten() {
  return (
    <div class="containeri">
      <div class="header">
        <div class="logo"></div>
      </div>
      <div class="title">Kindergarten</div>
      <div class="storiess">
        <div class="story">
          <div class="contents">
            <Link to="/baby" id="link">
              {" "}
              Baby{" "}
            </Link>
            {/* <a href="/table" id="link">
              Baby
            </a> */}
          </div>
        </div>

        <div class="story">
          <div class="contents">
            <Link to="/middle" id="link">
              {" "}
              Middle{" "}
            </Link>
            {/* <a href="/table" id="link">
              Middle
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="contents">
            <Link to="/top" id="link">
              {" "}
              Top{" "}
            </Link>
            {/* <a href="/table" id="link">
              Top
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kindergarten;
