var con = document.querySelector('.container');
const cusror = document.querySelector('.cursor');

con.addEventListener('mousemove', (cords) => { 
    console.log(cords);

    cusror.style.left = cords.x + 'px';
    cusror.style.top = cords.y + "px";
})