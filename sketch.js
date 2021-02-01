var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var bg_Img,start_IMG,start,bg2_IMG;


function preload(){

  bg_Img=loadImage("images/bg1.png")
  start_IMG=loadImage("images/start.png")
  bg2_Img=loadImage("images/bg2.png")

}

function setup(){
  canvas = createCanvas(1000,700);
  start=createSprite(500,550,40,20)
  start.addImage(start_IMG)
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bg_Img);
  if(playerCount === 2 && mousePressedOver(start)){
    game.update(1);
    
  }
  if(gameState === 1){
    clear();
    form.hide();
    game.play();
   
  }
  if(gameState === 2){
    game.end();
  }

drawSprites();
}
