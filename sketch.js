var ball;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	ball(20,20);

	World.add(world,ball);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	groundObj.display();
	groundObj=new ground(width/2,670,width,20);
	leftSide= new ground(1100,600,20,120);

	Engine.run(engine);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, 20 , 20 , force)
	}
}

function draw() {
  rectMode(CENTER);
  background(120);
  rect(800,700,100,800)
  drawSprites();
 
}



