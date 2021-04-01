const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofobj = new roof(300,300,400,30);

	bob1 = new bob(340,600,40);
	bob2 = new bob(380,600,40);
	bob3 = new bob(420,600,40);
	bob4 = new bob(460,600,40);
	bob5 = new bob(500,600,40);

	rope1 = new rope(bob1.body,roofobj.body,-80,0);
	rope2 = new rope(bob2.body,roofobj.body,-40,0);
	rope3 = new rope(bob3.body,roofobj.body,0,0);
	rope4 = new rope(bob4.body,roofobj.body,40,0);
	rope5 = new rope(bob5.body,roofobj.body,80,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 roofobj.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}



