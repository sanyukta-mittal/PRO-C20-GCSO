const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var car, wall;
var speed, weight;

var engine, world;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  speed = random(55,90);
  weight = random(400,1500);

  car=createSprite(50,200,50,50)
  car.velocityX=speed;
 
  wall=createSprite(1500,200,60,height/2)
  (wall).shapeColor=color(80,80,80)

 // World.add(world, this.body);
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<(car.width+wall.width))

  car.display();
  wall.display();

  drawSprites();
}