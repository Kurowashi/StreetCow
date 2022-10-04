let xCar = [600, 600, 600];
let yCar = [40, 96, 150];
let carSpeed = [2, 2.5, 3.2];

function drawCar() {
    image(carImage, xCar[0], yCar[0], 50, 40)
    image(carImage2, xCar[1], yCar[1], 50, 40)
    image(carImage3, xCar[2], yCar[2], 60, 40)
  }

  function moveCar() {
    xCar[0] -= carSpeed[0];
    xCar[1] -= carSpeed[1];
    xCar[2] -= carSpeed[2];
  }

  function resetCarPosition() {
    if(xCar[0] < -52) {
        xCar[0] = 600
    }
    if(xCar[1] < -52) {
        xCar[1] = 600
    }
    if(xCar[2] < -52) {
        xCar[2] = 600
    }
  }