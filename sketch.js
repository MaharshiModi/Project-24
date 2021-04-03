
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(100,600,30);

	ground1=new Ground(400,680,800,20);

	bottomBox=new Dustbin(610, 660, 100,20);

	sideBox=new Dustbin(550,620,20,100);
	
	sideBoxb=new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();

  ground1.display();

  bottomBox.display();
  sideBox.display();
  sideBoxb.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35});
	}
}



