
function setup() {
    createCanvas(500, 400)
  }
  
  function draw() {
    background(bg);
    drawPlayer();
    drawCar();
    moveCar();
    movePlayer();
    resetCarPosition();
  }
