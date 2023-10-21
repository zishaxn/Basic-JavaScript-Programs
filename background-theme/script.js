const toggle = document.querySelector("#darkmode-toggle");

let bg = document.body;

toggle.addEventListener("change", function () {
  if (this.checked) {
    // Toggle button is checked
    // Perform actions for the checked state
    bg.style.backgroundColor = "black";
  } else {
    // Toggle button is unchecked
    // Perform actions for the unchecked state
    bg.style.backgroundColor = "white";
  }
});
