const rods = document.querySelectorAll('.rod');
const rodWidth = parseInt(getComputedStyle(rods[0]).width);
const playArea = document.querySelector('.play-area');
const playAreaWidth = parseInt(getComputedStyle(playArea).width);
const rodSpeed = 10;
// const ballElement = document.querySelector('.ball');


// let score = 0;
// let highestScore = localStorage.getItem("highestScore");
// let highestScorePlayer = localStorage.getItem("highestScorePlayer");

// if (highestScore === null) {
//   highestScore = 0;
//   highestScorePlayer = "this is your first time";
// }

// alert(`Highest Score: ${highestScore} by ${highestScorePlayer}`);



let ballX = 50; // Initial X position of the ball
let ballY = 50; // Initial Y position of the ball
let ballSpeedX = 10; // Adjust this value to control horizontal ball speed
let ballSpeedY = 10; // Adjust this value to control vertical ball speed

function updateBallPosition() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Update the ball's position on the screen
  const ballElement = document.querySelector(".ball");
  ballElement.style.left = `${ballX}px`;
  ballElement.style.top = `${ballY}px`;

  const containerHeight = parseInt(getComputedStyle(document.querySelector('.play-area')).height);

// Collisions with top and bottom walls
if (ballY <= 0 || ballY + ballElement.clientHeight >= containerHeight) {
  ballSpeedY *= -1; // Reverse the vertical direction
}

  // Request the next animation frame
  requestAnimationFrame(updateBallPosition);
}
updateBallPosition();






document.addEventListener('keydown', updateRodsPosition);
function updateRodsPosition(event) {
    if (event.key === 'ArrowLeft') { 
        let leftPosition = parseInt(getComputedStyle(rods[0]).left);
        if (leftPosition > 1) { 
            rods[0].style.left = `${leftPosition - rodSpeed}px`;
            rods[1].style.left = `${leftPosition - rodSpeed}px`;
        }
    }
    if (event.key === 'ArrowRight') { 
        let rightPosition = parseInt(getComputedStyle(rods[0]).left);
        if (rightPosition+rodWidth+7 < playAreaWidth) { 
            rods[0].style.left = `${rightPosition + rodSpeed}px`;
            rods[1].style.left = `${rightPosition + rodSpeed}px`;
        }
    }
}
 
