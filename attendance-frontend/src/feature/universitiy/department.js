import './staff.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Staff() {
  return (
    <div class="containeri">
      <div class="header">
        <div class="logo"></div>
      </div>
      <div class="title">Staff</div>
      <div class="stories">
        <div class="story">
          <div class="content">
            <Link to="/administration" id="link">
              {' '}
              Administration{' '}
            </Link>
            {/* <a href="/table" id="link">
              Administration
            </a> */}
          </div>
        </div>

        <div class="story">
          <div class="content">
            <Link to="/finance" id="link">
              {' '}
              Finance{' '}
            </Link>
            {/* <a href="/table" id="link">
              Finance
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/it" id="link">
              {' '}
              IT{' '}
            </Link>
            {/* <a href="/table" id="link">
              IT
            </a> */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/teachers" id="link">
              {' '}
              Teachers{' '}
            </Link>
            {/* <a href="/table" id="link">
              Teachers
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/nurses" id="link">
              {' '}
              Nurses{' '}
            </Link>
            {/* <a href="/table" id="link">
              Nurses
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/social" id="link">
              {' '}
              Social workers{' '}
            </Link>
            {/* <a href="/table" id="link">
              Social workers
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/securities" id="link">
              {' '}
              Securities{' '}
            </Link>
            {/* <a href="/table" id="link">
              Securities
            </a>{" "} */}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <Link to="/students" id="link">
              {' '}
              Staff Students{' '}
            </Link>
            {/* <a href="/table" id="link">
              Staff Students
            </a>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
