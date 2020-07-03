const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, block;

function setup() {
  createCanvas(800,400);
 

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,300,100,10);
  stand = new Ground(500,200,100,10);

  block1 = new Block(320,275,40,50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 
  ground.display();
  stand.display();
  block1.display();
}