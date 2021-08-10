var bg,sleep,brush,gym,eat,drink,bath,move;
var astronaut;
var edges;

function preload(){
  bg = loadImage("iss.png")
  brush = loadAnimation("brush.png")
  sleep = loadAnimation("sleep.png")
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat = loadAnimation("eat1.png","eat2.png")
  drink = loadAnimation("drink1.png","drink2.png")
  bath = loadAnimation("bath1.png","bath2.png")
  move = loadAnimation("move.png","move1.png")
  
}

function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300, 230, 50, 50);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20);
  fill("white");
  text("Instructions:",20,35);
  textSize(15);
  text("Up Arrow = Brushing",20,55);
  text("Down Arrow = Gymming",20,70);
  text("Left Arrow = Eating",20,85);
  text("Right Arrow = Bathing",20,100);
  text("m key = Moving",20,115);
  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("up")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("down")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("left")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  if(keyDown("right")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }


}