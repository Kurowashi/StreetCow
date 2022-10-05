
function setup() {
    createCanvas(500, 400)
    music.loop();
  }
  
  function draw() {
    background(bg);
    drawPlayer();
    drawCar();
    moveCar();
    movePlayer();
    resetCarPosition();
    collide2D();
    scoreboard();
    addScore();
  }
