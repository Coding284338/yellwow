
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var ball1;
//var ball2;
var ground2;
var ground3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(100,600,1400,20);
ball1 = new Ball(200,200,30);
//ball2 = new Ball(260,100,40)
ground2 = new Ground(600,550,20,80);
ground3 = new Ground(700,550,20,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(30)
  fill ("yellow")
  text(mouseX+","+mouseY,mouseX,mouseY)
  ground1.display();
  ball1.display();
  //ball2.display();
  ground2.display();
  ground3.display();
 // drawSprites();
 
}

function keyPressed() {
  if(keyDown("up")) {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-100})

}
}

