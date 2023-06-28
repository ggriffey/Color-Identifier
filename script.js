const API_URL = "https://www.thecolorapi.com/id";

const form = document.querySelector("form");
let saved;
let color;
let colorSquare = document.querySelector("p");
colorSquare.style.display = "none";

const gatherColor = () => {
  let response = document.getElementById("chosencolor").value;
  if (isValidColor(response)) {
    color = response;
    document.querySelector("div").textContent = "";
  } else {
    document.querySelector("div").textContent =
      "invalid color format! try again";
  }
  form.reset();
};

const updatePage = () => {
  fetch(`https://www.thecolorapi.com/id?hex=${color}`)
    .then((response) => response.json())
    .then((data) => (saved = data));

  setTimeout(() => {
    document.querySelector("h1").textContent =
      saved["name"]["value"] + ` (#${color.toUpperCase()})`;
    colorSquare.style.display = "block";
    colorSquare.style.backgroundColor = saved["hex"]["value"];
  }, 100);
};

const isValidColor = (res) => {
  if (res.length == 6) {
    const allowed = "abcdef0123456789";
    for (let i = 0; i < res.length; i++) {
      if (!allowed.includes(res[i])) {
        return false;
      }
    }
    return true;
  }
};

const clickFunction = () => {
  gatherColor();
  updatePage();
};

const button = document.getElementById("button");
button.addEventListener("click", clickFunction);
form.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log("enter pressed");
    clickFunction();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
