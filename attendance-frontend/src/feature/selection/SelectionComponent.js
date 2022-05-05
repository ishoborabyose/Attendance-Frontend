import './selection.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Selection() {
  return (
    <div class="container">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div class="storiesss">
        {/* <div class="story">
          <div class="content">
            <Link to="/primary" id="link">
              {" "}
              Primary{" "}
            </Link>

          </div>
        </div>

        <div class="story">
          <div class="content">
            <Link to="/secondary" id="link">
              {" "}
              Secondary{" "}
            </Link>

          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/kindergaten" id="link">
              {" "}
              Kindergarten{" "}
            </Link>

          </div>
        </div> */}
        <div class="story">
          <div class="content">
            <Link to="/staff" id="link">
              {' '}
              Staff Portal{' '}
            </Link>
          </div>
        </div>

        <div class="story">
          <div class="content">
            <Link to="/university" id="link">
              {' '}
              Students Portal{' '}
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
