import './university.css';
import React from 'react';
import { Link } from 'react-router-dom';

function University() {
  return (
    <div class="containeri">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div class="title">University</div>
      <div class="stories">
        <div class="story">
          <div class="content">
            <Link to="/level_one" id="link">
              Level 1
            </Link>
            {/* <a href="/table" id="link">
              P 1
            </a> */}
          </div>
        </div>

        <div class="story">
          <div class="content">
            <Link to="/level_two" id="link">
              Level 2
            </Link>
            {/* <a href="/table" id="link">
              P 2
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/level_three" id="link">
              Level 3
            </Link>
            {/* <a href="/table" id="link">
              P 3
            </a> */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/level_four" id="link">
              Level 4
            </Link>
            {/* <a href="/table" id="link">
              P 4
            </a>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default University;