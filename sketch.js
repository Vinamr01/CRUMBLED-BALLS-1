
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bottomBoxImg;

function preload(){
  bottomBoxImg = loadImage("dustbingreen.png");
}




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,450,70);
  groundObj = new Ground(width/2,670,width,20);

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
	
	
  Engine.run(engine);
  Render.run(render);
  
  
}


function draw() {
  rectMode(CENTER);
  background("white");


  paper.display();
  groundObj.display(); 
 
  bottomBox = createSprite(width/2 , height-210, 120 , 10);
  bottomBox.addImage(bottomBoxImg);
 drawSprites();
}

function keyPressed() {


  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  	}
}