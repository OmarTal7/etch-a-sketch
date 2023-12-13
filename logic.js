const container = document.querySelector(".container");
const rainbowMode = document.querySelector("#rainbow-mode");
let gridParts = [];
let isDrawing = false;
let isRainbowMode = false;

function promptUser() {
  let userNumber = prompt(
    "What board size do you want? (e.g. type '3' for a '3x3', or '50' for a '50x50' grid)"
  );
  return userNumber;
}

function makeGrid(size) {
  let height = `${600 / size}px`;
  let width = `${600 / size}px`;

  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.setAttribute("style", `height: ${height}; width: ${width};`);
    container.appendChild(div);
  }

  gridParts = document.querySelectorAll(".pixel");
}

function refreshGrid() {
  container.innerHTML = "";
  makeGrid(16);
  if (isRainbowMode) {
    activateRainbowMode();
  } else {
    activateBlackMode();
  }
}

function activateBlackMode() {
  gridParts.forEach((part) => {
    part.removeEventListener("mousemove", rainbowCo);
    part.addEventListener("mousedown", () => {
      isDrawing = true;
    });
    part.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    part.addEventListener("mousemove", (e) => {
      if (isDrawing) {
        blackCo(e);
      }
    });
  });
}

function activateRainbowMode() {
  gridParts.forEach((part) => {
    part.removeEventListener("mousemove", blackCo);
    part.addEventListener("mousedown", () => {
      isDrawing = true;
    });
    part.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    part.addEventListener("mousemove", (e) => {
      if (isDrawing) {
        rainbowCo(e);
      }
    });
  });
}

function blackCo(e) {
  e.target.style.backgroundColor = "black";
}

function rainbowCo(e) {
  let randomHash = "#" + Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = randomHash;
}

function toggleMode() {
  if (isRainbowMode) {
    isRainbowMode = false;
    activateBlackMode();
  } else {
    isRainbowMode = true;
    activateRainbowMode();
  }
}

makeGrid(16);
activateBlackMode();

rainbowMode.addEventListener("click", () => {
  toggleMode();
});
