var button = document.getElementById('btn');
var clickCount = document.getElementById('click-count');
var count = 0;

var bg = document.body;
button.addEventListener('click', function () {
    count++;
    console.log('button is clicked');
    bg.style.backgroundColor = "green";
    clickCount.innerHTML = count;
});


function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

button.addEventListener('click', function () {
   var bodyColor = randomColor();
   var boxColor = randomColor();
    document.getElementById('box').style.backgroundColor = boxColor;
  document.body.backgroundColor = bodyColor;

});
