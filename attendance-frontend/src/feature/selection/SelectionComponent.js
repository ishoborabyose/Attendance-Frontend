import "./selection.css";
import React from "react";
import { Link } from "react-router-dom";

function Selection() {
  return (
    <div class="container">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div class="storiesss">
        <div class="story">
          <div class="content">
            <Link to="/primary" id="link">
              {" "}
              Primary{" "}
            </Link>
            {/* <a href="/primary" id="link">
              Primary
            </a> */}
          </div>
        </div>

        <div class="story">
          <div class="content">
            <Link to="/secondary" id="link">
              {" "}
              Secondary{" "}
            </Link>
            {/* <a href="/secondary" id="link">
              Secondary
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/kindergaten" id="link">
              {" "}
              Kindergarten{" "}
            </Link>
            {/* <a href="/kindergaten" id="link">
              Kindergarten
            </a> */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/staff" id="link">
              {" "}
              Staff{" "}
            </Link>
            {/* <a href="/staff" id="link">
              Staff
            </a>{" "} */}
          </div>
        </div>

        <div class="story">
          <div class="content">
            <Link to="/staff" id="link">
              {" "}
              University{" "}
            </Link>
            {/* <a href="/staff" id="link">
              University
            </a>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
