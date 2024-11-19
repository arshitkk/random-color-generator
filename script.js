//! Function for generating Random number between 0 to 255

function randomNumber() {
  const num = Math.floor(Math.random() * 256);
  return num;
}

//! function for Generating Random RGB color

function randomRGBColor() {
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();
  return `rgb(${r}, ${g}, ${b})`;
}

//! function for Generating Random Hex color

function randomHexColor() {
  const r = randomNumber().toString(16).padStart(2, "0");
  const g = randomNumber().toString(16).padStart(2, "0");
  const b = randomNumber().toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}

//! Button logic for generating Random RGB Color

let generatedRgbColor = "";
let gRgbBtn = document.querySelector(".generateRgbBtn");
let screenText = document.querySelector(".screenText");
let screen = document.querySelector(".screen");
gRgbBtn.addEventListener("click", () => {
  const rgbColor = randomRGBColor();
  generatedRgbColor = rgbColor;
  screenText.innerText = `${rgbColor}`;
  screen.style.cssText = `background-color: ${rgbColor};`;
});
//! Button logic for generating Random Hex Color

let generatedHexColor = "";
let gHexBtn = document.querySelector(".generateHexBtn");
// let screenText = document.querySelector(".screenText");
// let screen = document.querySelector(".screen");
gHexBtn.addEventListener("click", () => {
  const hexColor = randomHexColor();
  generatedHexColor = hexColor;
  screenText.innerText = `${hexColor}`;
  screen.style.cssText = `background-color: ${hexColor};`;
});

//! Copy Buttons for RGB

let rgbBTn = document.querySelector(".rgbBtn");
rgbBTn.addEventListener("click", () => {
  if (generatedRgbColor) {
    navigator.clipboard
      .writeText(generatedRgbColor)
      .then(() => {
        console.log(`Copied to clipboard: ${generatedRgbColor}`);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  } else {
    alert("Oye Generate To Karle!!!!");
  }
});
//! Copy Buttons for Hex

let hexBTn = document.querySelector(".hexBtn");
hexBTn.addEventListener("click", () => {
  if (generatedHexColor) {
    navigator.clipboard
      .writeText(generatedHexColor)
      .then(() => {
        console.log(`Copied to clipboard: ${generatedHexColor}`);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  } else {
    alert("Oye Hex Generate To Karle!!!!");
  }
});

//! Dark Mode
let currMode = "Light";
let bodie = document.querySelector("#bodie");
let container = document.querySelector("#container");
let darkModeBtn = document.querySelector(".darkModeBtn");
let txt = document.querySelectorAll(".text");
function darkMode() {
  if (currMode === "Light") {
    bodie.classList.add("Dark");
    bodie.classList.remove("light");
    currMode = "Dark";

    bodie.style.cssText =
      "background: #000000; background: -webkit-linear-gradient(to right, #434343, #000000); background: linear-gradient(to right, #434343, #000000";

    container.style.cssText =
      "background: #000000; background: -webkit-linear-gradient(to right, #434343, #000000); background: linear-gradient(to right, #434343, #000000";

    console.log("Dark Mode Activated!");

    txt.forEach((element) => {
      element.style.color = "white";
    });
  } else if (currMode == "Dark") {
    bodie.classList.add("Light");
    bodie.classList.remove("Dark");
    currMode = "Light";
    bodie.style.cssText =
      "background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);";
    container.style.cssText =
      "background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);";
    console.log("Dark Mode Deactivated!");
    txt.forEach((element) => {
      element.style.color = "black";
    });
  }
}
darkModeBtn.addEventListener("click", darkMode);
