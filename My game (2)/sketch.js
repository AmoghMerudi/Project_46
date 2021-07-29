/*const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world;*/
var bgImage;
var bird, birdImage;
var pillar1, pillar2, pillar3, pillar4, pillar5, pillar6, pillar7, pillar8, pillar9, pillar10;
var pillarGroup;
var edges;
var lives;

function preload(){
  bgImage = loadImage("images/bg.jpeg");
  birdImage = loadImage("images/bird.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight-74);
  
  /*engine = Engine.create();
  world = engine.world;*/

  /*var options = {
    resitution: 0.1,
    isStatic: true
  }*/

  lives = 5;

  bird = createSprite(170,330,20,20);
  bird.addImage(birdImage);
  //World.add(world, bird);
  bird.velocityY = 0.8;
  bird.scale = 0.3;

    pillar1 = createSprite(630,100,50,350);
    pillar1.velocityX = -1;
    pillar1.shapeColor = "green";
    pillar2 = createSprite(630,600,50,380);
    pillar2.velocityX = -1;
    pillar2.shapeColor = "green";

    pillar3 = createSprite(755,150,50,350);
    pillar3.velocityX = -1;
    pillar3.shapeColor = "green";
    pillar4 = createSprite(755,650,50,350);
    pillar4.velocityX = -1;
    pillar4.shapeColor = "green";

    pillar5 = createSprite(880,200,50,400);
    pillar5.velocityX = -1;
    pillar5.shapeColor = "green";
    pillar6 = createSprite(880,700,50,350);
    pillar6.velocityX = -1;
    pillar6.shapeColor = "green";

    pillar7 = createSprite(1005,180,50,370);
    pillar7.velocityX = -1;
    pillar7.shapeColor = "green";
    pillar8 = createSprite(1005,680,50,350);
    pillar8.velocityX = -1;
    pillar8.shapeColor = "green";

    pillar9 = createSprite(1130,70,50,350);
    pillar9.velocityX = -1;
    pillar9.shapeColor = "green";
    pillar10 = createSprite(1130,590,50,390);
    pillar10.velocityX = -1;
    pillar10.shapeColor = "green";

}

function draw() {
  //Engine.update(engine)
  
  background(bgImage);

  text("Lives: " + lives, 1500,20);

  if(keyDown(UP_ARROW)){
    bird.y = bird.y-2;
    }  

  /*pillar1.display();
  pillar2.display();
  pillar3.display();
  pillar4.display();
  pillar5.display(); 
  pillar6.display();
  pillar7.display();
  pillar8.display();
  pillar9.display();
  pillar10.display(); 
  image(birdImage,bird.position.x,bird.position.y,50,50);*/
   
fill("green"); 

edges = createEdgeSprites();

  Pillar();
  if(bird.isTouching(pillar1) || bird.isTouching(pillar2) || bird.isTouching(pillar3) || bird.isTouching(pillar4) || bird.isTouching(pillar5) || 
  bird.isTouching(pillar6) || bird.isTouching(pillar7) || bird.isTouching(pillar8) || bird.isTouching(pillar9) || bird.isTouching(pillar10)){
    text("Game Over", displayWidth/2, displayHeight/2);

    pillar1.velocityX = 0;
    pillar2.velocityX = 0;
    pillar3.velocityX = 0;
    pillar4.velocityX = 0;
    pillar5.velocityX = 0;
    pillar6.velocityX = 0;
    pillar7.velocityX = 0;
    pillar8.velocityX = 0;
    pillar9.velocityX = 0;
    pillar10.velocityX = 0;

    bird.velocityX = 0;
    bird.velocityY = 0;
  }

  if(pillar1.x === 0){
    pillar1.x = 630;
    pillar1.y = 100;
    pillar1.velocityX = -1;
  }

  if(pillar2.x === 0){
    pillar2.x = 630;
    pillar2.y = 600;
    pillar2.velocityX = -1;
  }

  if(pillar3.x === 0){
    pillar3.x = 630;
    pillar3.y = 150;
    pillar3.velocityX = -1;
  }

  if(pillar4.x === 0){
    pillar4.x = 630;
    pillar4.y = 650;
    pillar4.velocityX = -1
  }

  if(pillar5.x === 0){
    pillar5.x = 630;
    pillar5.y = 200;
    pillar5.velocityX = -1;
  }

  if(pillar6.x === 0){
    pillar6.x = 630;
    pillar6.y = 700;
    pillar6.velocityX = -1;
  }

  if(pillar7.x === 0){
    pillar7.x = 630;
    pillar7.y = 180;
    pillar7.velocityX = -1;
  }

  if(pillar8.x === 0){
    pillar8.x = 630;
    pillar8.y = 680;
    pillar8.velocityX = -1;
  }

  if(pillar9.x === 0){
    pillar9.x = 630;
    pillar9.y = 70;
    pillar9.velocityX = -1;
  }

  if(pillar10.x === 0){
    pillar10.x = 630;
    pillar10.y = 590;
    pillar10.velocityX = -1;
  }
  /*if(bird.isTouching(pillar1) || bird.isTouching(pillar2) || bird.isTouching(pillar3) || bird.isTouching(pillar4) || bird.isTouching(pillar5) || 
  bird.isTouching(pillar6) || bird.isTouching(pillar7) || bird.isTouching(pillar8) || bird.isTouching(pillar9) || bird.isTouching(pillar10)){

    text("Game Over", displayWidth/2, displayHeight/2);

    bird.velocityX = 0;
    bird.velocityY = 0;
  }*/

  
  drawSprites();
}

function Pillar(){
  if(World.frameCount%500 === 0){

    /*pillar1 = createSprite(630,100,50,350);
    pillar1.velocityX = -1;
    pillar1.shapeColor = "green";
    pillar2 = createSprite(630,600,50,380);
    pillar2.velocityX = -1;
    pillar2.shapeColor = "green";

    pillar3 = createSprite(755,150,50,350);
    pillar3.velocityX = -1;
    pillar3.shapeColor = "green";
    pillar4 = createSprite(755,650,50,350);
    pillar4.velocityX = -1;
    pillar4.shapeColor = "green";

    pillar5 = createSprite(880,200,50,400);
    pillar5.velocityX = -1;
    pillar5.shapeColor = "green";
    pillar6 = createSprite(880,700,50,350);
    pillar6.velocityX = -1;
    pillar6.shapeColor = "green";

    pillar7 = createSprite(1005,180,50,370);
    pillar7.velocityX = -1;
    pillar7.shapeColor = "green";
    pillar8 = createSprite(1005,680,50,350);
    pillar8.velocityX = -1;
    pillar8.shapeColor = "green";

    pillar9 = createSprite(1130,70,50,350);
    pillar9.velocityX = -1;
    pillar9.shapeColor = "green";
    pillar10 = createSprite(1130,590,50,390);
    pillar10.velocityX = -1;
    pillar10.shapeColor = "green";

    /*pillar11 = createSprite(1255,70,50,350);
    pillar11.velocityX = -1;
    pillar12 = createSprite(1255,590,50,390);
    pillar12.velocityX = -1;

    pillar13 = createSprite(1380,120,50,350);
    pillar13.velocityX = -1;
    pillar14 = createSprite(1380,640,50,390);
    pillar14.velocityX = -1;

    pillar15 = createSprite(1505,170,50,350);
    pillar15.velocityX = -1;
    pillar16 = createSprite(1505,690,50,390);
    pillar16.velocityX = -1;*/
  }
}