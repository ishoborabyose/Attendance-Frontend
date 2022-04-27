import "./primary.css";
import React from "react";
import { Link } from "react-router-dom";
import TableComponent from "../table/TableComponent";

function Primary({ name }) {
  return (
    <div class="containeri">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div class="title">Primary</div>
      <div class="stories">
        <div class="story">
          <div class="content">
            <Link to="/id" id="link">
              p1
              <TableComponent name={name} />
            </Link>
            {/* <a href="/table" id="link">
              P 1
            </a> */}
          </div>
        </div>

        <div class="story">
          <div class="content">
            <Link to="/table" id="link">
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
            <Link to="/table" id="link">
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
            <Link to="/table" id="link">
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
            <Link to="/table" id="link">
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
            <Link to="/table" id="link">
              {" "}
              P 1{" "}
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
