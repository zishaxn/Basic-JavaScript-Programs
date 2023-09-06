let box = document.querySelector('#box');


function getRandomPosition() {

    const viewportHeight = window.innerHeight - box.clientHeight;
    const viewportWidth = window.innerWidth - box.clientWidth;
    const y = Math.random()*viewportHeight;
    const x = Math.random()*viewportWidth;

  return {x,y}

}

box.addEventListener('mouseover', () => {
    const newPosition = getRandomPosition();
    box.style.transform = `translate(${newPosition.x}px,${newPosition.y}px)`;
    box.style.color = 'red';
});


function changeSize() {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    box.style.width  = `${ viewportWidth * 0.1 }px`;
    box.style.height = `${viewportHeight * 0.2}px`;
    
}

window.addEventListener('resize', changeSize);
changeSize();
