import "./guardian.css";

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
            <input name="utf8" type="hidden" value="✓"></input>
            <input name="utf8" type="hidden" value="✓"></input>
            <div class="field">
              <label class="control-label" for="user_login">
                Guardian Code
              </label>
              <br></br>
              <input
                autofocus="autofocus"
                class="form-control"
                type="text"
                name="user[login]"
                id="user_login"
              ></input>
            </div>
            <div class="actions">
              <input
                type="submit"
                name="commit"
                value="Log in"
                class="btn btn-primary"
                data-disable-with="Log in"
              ></input>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
}

export default Guardian;
