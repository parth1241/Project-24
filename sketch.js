
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 
	var ground_options={
		isStatic:true
	}
	var ball_options={
		restution:0.3,
		density:1.2,
		isStatic:false,
		friction:0.5
	}
	ground=Bodies.rectangle(400,650,800,20,ground_options);
	paper=Bodies.circle(100,630,20,ball_options);
	cont=Bodies.rectangle(700,630,{isStatic:true})
	cont2=Bodies.rectangle(665,600,{isStatic:true})
	cont3=Bodies.rectangle(735,600,{isStatic:true})
	World.add(world,ground);
	World.add(world,paper)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);  
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS)
  ellipse(paper.position.x,paper.position.y,20,20)
  rect(cont.position.x,cont.position.y,75,10);
  rect(cont2.position.x,cont2.position.y,10,75);
  rect(cont3.position.x,cont3.position.y,10,75);
  

  
 
}

function keyPressed() {
	if (keyCode === ""){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



