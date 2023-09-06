const toggle = document.querySelector('.toggle input');

let bg = document.body;
toggle.addEventListener('change', function() {
  if (this.checked) {
    // Toggle button is checked
    // Perform actions for the checked state
      console.log('Toggle button is checked');
      bg.style.backgroundColor = "black";
  } else {
    // Toggle button is unchecked
    // Perform actions for the unchecked state
      console.log('Toggle button is unchecked');
    bg.style.backgroundColor = "lightpink";
  }
});
