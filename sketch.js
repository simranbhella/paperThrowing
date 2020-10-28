var paperBall;
var ground;
var dustbin1,dustbin2,dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	paperBall=new Paper(200,200,10);
	ground = new Ground(width / 2, 750, width, 20);
	dustbin1 = new Dustbin(700,720,100,10);
	dustbin2 = new Dustbin(650,670,10,100);
	dustbin3 = new Dustbin(750,750,10,100);

;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyCode === DOWN_ARROW){
	keyPressed();
	}
	paperBall.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBall.Body,paperBall.body.position,{x:85,y:-85})
	}
}


