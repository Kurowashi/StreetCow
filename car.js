let xCar = [600, 600, 600, 600, 600, 600];
let yCar = [40, 96, 150, 210, 270, 318];
let carSpeed = [2, 2.5, 3.2, 5, 3.3, 2.3];
let carHeight = 40;
let carLength = 50;

function drawCar() {
    for(i = 0; i < carImages.length; i++){
      image(carImages[i], xCar[i], yCar[i], carLength, carHeight)
    }
  }

  function moveCar() {
    for(i = 0; i < carImages.length; i++){
      xCar[i] -= carSpeed[i];
    }
  }

  function resetCarPosition() {
    for(i = 0; i < carImages.length; i++){
      if(outOfScreen(xCar[i])) {
          xCar[i] = 600;
      }
    }
  }

  function outOfScreen(xCar){
    return xCar < -51;
  }