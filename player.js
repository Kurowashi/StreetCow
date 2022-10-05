//Player
let yPlayer = 366;
let xPlayer = 100;
let colision = false;
let score = 0;

function drawPlayer() {
    image(playerImage, xPlayer, yPlayer, 30, 30)
  }


  function movePlayer() {
    if(keyIsDown(UP_ARROW)) {
      yPlayer -= 3;
    }
    if(keyIsDown(DOWN_ARROW)) {
      if(canMove()){
        yPlayer += 3;
      }
    }
  }

  function collide2D() {
    for (let i = 0; i < carImages.length; i++) {
      colision = collideRectCircle(xCar[i], yCar[i], carLength, carHeight, xPlayer, yPlayer, 12)
      if(colision) {
        initialPosition();
        colisionSound.play();
        if(score > 0){
          score -= 1;
        }
      }
    }
  }

 function initialPosition() {
    yPlayer = 366
 }

 function scoreboard() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(score, width / 5, 27);
 }

 function addScore() {
  if(yPlayer < 15) {
    score += 1;
    scoreSound.play();
    initialPosition();
  }
 }

 function canMove() {
  return yPlayer < 366;
 }

