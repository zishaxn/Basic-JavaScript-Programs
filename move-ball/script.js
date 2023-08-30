const ball = document.querySelector('#ball');
const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;


const ballSize = 30;
const steps = 30;



let ballX = Math.random() * (viewportWidth - ballSize);
let ballY = Math.random() * (viewportHeight - ballSize);

ball.style.transform = `translate(${ballX}px, ${ballY}px)`;


function moveBall(directionX,directionY) {
    ballX = ballX + (directionX * steps);
    ballY = ballY + (directionY * steps);

    // check for boundaries.

    ballX = Math.max(0, Math.min(viewportWidth - ballSize, ballX));
    ballY = Math.max(0, Math.min(viewportHeight - ballSize, ballY));

    console.log(ballY);

    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;

}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            moveBall(0,-1)
            break;
        case 'ArrowDown':
            moveBall(0,1)
            break;
        case 'ArrowLeft':
            moveBall(-1,0)
            break;
        case 'ArrowRight':
            moveBall(1,0)
            break;
        default:
            break;
    }
});

