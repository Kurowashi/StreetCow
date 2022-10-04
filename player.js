//Player
let yPlayer = 366;
let xPlayer = 100;

function drawPlayer() {
    image(playerImage, xPlayer, yPlayer, 30, 30)
  }


  function movePlayer() {
    if(keyIsDown(UP_ARROW)) {
      yPlayer -= 3;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yPlayer += 3;
    }
  }