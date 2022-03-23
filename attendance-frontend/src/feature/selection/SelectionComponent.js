import "./selection.css";

function Selection() {
  return (
    <div class="container">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div class="stories">
        <div class="story">
          <div class="content">
            <a href="/primary" id="link">
              Primary
            </a>
          </div>
        </div>

        <div class="story">
          <div class="content">
            <a href="/secondary" id="link">
              Secondary
            </a>{" "}
          </div>
        </div>
        <div class="story">
          <div class="content">
            <a href="/kindergaten" id="link">
              Kindergarten
            </a>
          </div>
        </div>
        <div class="story">
          <div class="content">
            <a href="/staff" id="link">
              Staff
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
