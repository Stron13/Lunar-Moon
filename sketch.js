let ground;
let lander;
var lander_img;
var bg_img;

var vy = 0;
var vx = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(270,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200);
  lander.debug = false;
  
  invisibleGround = createSprite(150,530,400,10);
  invisibleGround.visible = false;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y +=vy;

  lander.collide(invisibleGround);

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }

  if(keyCode==DOWN_ARROW)
  {
    downward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }

  if(keyCode==LEFT_ARROW)
  {
    leftward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }

  if(keyCode==RIGHT_ARROW)
  {
    rightward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  vy = -1;
}

function downward_thrust()
{
  vy = +1;
}

function leftward_thrust()
{
  lander.position.x -=5
}

function rightward_thrust()
{
  lander.position.x +=5
}