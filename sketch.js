var player, playerAnimation, playerJumping;
var ground, invisibleGround, groundImg, ground2, invisibleGround2, groundImg2, groundImg3,ground3,ground4,ground4Img;
var policeGun, policeGunImg;


function preload(){
  playerAnimation=loadAnimation("p1.png","p2.png");
  playerJumping=loadImage("jumping.png");
  groundImg=loadImage("ground.png");
  policeGunImg=loadImage("rpk.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   
   
   ground=createSprite(400,350,10000,100);
   ground.addImage(groundImg);
   ground2=createSprite(900,350,10000,100);
   ground2.addImage(groundImg);
   ground3=createSprite(1400,350,10000,100);
   ground3.addImage(groundImg);
   ground4=createSprite(1900,350,10000,100);
   ground4.addImage(groundImg);
   ground.velocityX=-8;
   ground2.velocityX=-8;
   ground3.velocityX=-8;
   ground4.velocityX=-8;

  

   invisibleGround=createSprite(800,360,100000,100);
   invisibleGround.visible=false;
 
   policeGun=createSprite(200,280,10,10);
   policeGun.addImage(policeGunImg);

   player=createSprite(600,350,10,10);
   player.addAnimation("running",playerAnimation);
  
}

function draw() {
background("white");
 


if(keyIsDown(32) && player.y<=349){
  player.velocityY=-12
 }
 
 
 


 if(player.y>351){
  player.addImage(playerJumping); 
}

if(ground2.x<400){
  ground2.x=ground2.x+ground2.width/2
}
if(ground.x<0){
  ground.x=ground.x+ground.width/2
}
if(ground3.x<800){
  ground3.x=ground3.x+ground3.width/2
}
if(ground4.x<1200){
  ground4.x=ground4.x+ground4.width/2
}

player.velocityY+=0.4;

player.collide(invisibleGround);

drawSprites();
}
