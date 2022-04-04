import "./kindergaten.css";

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
            <a href="/table" id="link">
              Baby
            </a>
          </div>
        </div>

        <div class="story">
          <div class="contents">
            <a href="/table" id="link">
              Middle
            </a>{" "}
          </div>
        </div>
        <div class="story">
          <div class="contents">
            <a href="/table" id="link">
              Top
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kindergarten;
