import "./guardian.css";
import React from "react";
import { Link } from "react-router-dom";

function Guardian() {
  return (
    <div class="container">
      <div class="header">
        <div class="logo"></div>
      </div>
      <article>
        <div class="form">
          <h2 class="head">Guardian</h2>
          <form class="login-form">
            <div class="field">
              <label class="control-label">Guardian Code</label>
              <br></br>
              <input class="form-control" type="integer"></input>
            </div>

            <div class="actions">
              <button type="submit" value="Log in" class="btn btn-primary">
                <Link to="/table" id="links">
                  {" "}
                  Log in{" "}
                </Link>
                {/* <a href="/table" class="links">
                  {" "}
                  Log in{" "}
                </a> */}
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
}

export default Guardian;
