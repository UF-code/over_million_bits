var a = 1664525,
    c = 1013904223,
    m = Math.pow(2, 32),
    seed = 12234;

function nextRand() {
  seed = (a * seed + c) % m;
  return seed;
}

function nextRandFloat() {
  return nextRand() / m;
}


var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

var y = 0;
draw();
function draw() {
  for(var x = 0; x < 550; x++) {
    if(nextRandFloat() < 0.5) {
      context.fillRect(x, y, 1, 1);
    }
  }
  y++;
  if(y < 600) {
    requestAnimationFrame(draw);
  }
}