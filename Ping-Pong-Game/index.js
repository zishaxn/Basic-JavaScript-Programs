const rods = document.querySelectorAll('.rod');  /* variable for both the rods */
const playArea = document.querySelector('.play-area'); /* varaible for play area (only used below) */
const playAreaWidth = parseInt(getComputedStyle(playArea).width); /* variable for width of playArea */
/*>>>>> getComputedStyle` allows you to retrieve the computed values of various CSS properties for an element in this case width */
const rodWidth = parseInt(getComputedStyle(rods[0]).width);  /* variable for rod width */
const rodSpeed = 10; //this value will control the rod speed


// an eventListener that will triggered on keydown and call function to move rods
document.addEventListener('keydown', updateRodsPosition);

function updateRodsPosition(event) {
    // if clicked button is left
 if (event.key==='ArrowLeft') {
     const leftPosition = parseInt(getComputedStyle(rods[0]).left);  // it will give position of rod from left in integer form
    if (leftPosition > 1) {
      rods[0].style.left = `${leftPosition - rodSpeed}px`;
      rods[1].style.left = `${leftPosition - rodSpeed}px`;
    }
  }
    // if clicked button is right
 if (event.key==='ArrowRight') {
     const rightPosition = parseInt(getComputedStyle(rods[0]).left);
     if (rightPosition + rodWidth < playAreaWidth) {
      rods[0].style.left = `${rightPosition + rodSpeed}px`;
      rods[1].style.left = `${rightPosition + rodSpeed}px`;
    }
  }
}
