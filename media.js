//Images
let bg;
let carImage;
let carImage2;
let carImage3;
let playerImage;

//Sounds
let music;
let colisionSound;
let scoreSound;

function preload() {
    //Images Preload
    bg = loadImage("images/estrada.png");
    playerImage = loadImage("images/ator-1.png");
    carImage = loadImage("images/carro-1.png");
    carImage2 = loadImage("images/carro-2.png");
    carImage3 = loadImage("images/carro-3.png");
    carImages = [carImage, carImage2, carImage3, carImage, carImage2, carImage3]

    //Sounds Prelod
    music = loadSound("audio/trilha.mp3");
    colisionSound = loadSound("audio/colidiu.mp3");
    scoreSound = loadSound("audio/pontos.wav")
}