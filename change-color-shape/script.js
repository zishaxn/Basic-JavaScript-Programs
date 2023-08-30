// To generate randon color in rgb
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
   
}


// //To change the background color or display-circle class
var circle = document.querySelector('.circle');
var colorBtn = document.querySelector('.btn-1');

colorBtn.addEventListener('click', function () {
    var color = randomColor();
    circle.style.backgroundColor = color;
});


//to chnage the shape of the square class
var square = document.querySelector('.square')
var shapeBtn = document.querySelector('.btn-2');

shapeBtn.addEventListener('click', function () {
    var color = randomColor();
    
    square.style.backgroundColor = color;

    if (square.style.borderRadius == '50%') {
        square.style.borderRadius = '0%';
    }
    else {
        square.style.borderRadius = '50%';
    }
});




// it only changes the shape from square to cricle and rotates the square.
// document.addEventListener('DOMContentLoaded', function() {
//     var shapeBtn = document.querySelector('.btn-2');
//     var isTriangle = false;
//     shapeBtn.addEventListener('click', function () {
//         isTriangle = !isTriangle;
//         square.style.borderRadius = isTriangle ? '0' : '50%';
//         square.style.transform = isTriangle ? 'rotate(45deg)' : 'rotate(0)';
//     });
// });









