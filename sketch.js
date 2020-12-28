// Creating the variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  paper, ground, dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {

// Creating the canvas
createCanvas(1200, 900);

// Creating the physics engine
engine = Engine.create();
world = engine.world;

//To create a sprite for the paper
paper = new Paper(50, 350, 20);

//To create a sprite for the ground
ground = new Ground(400, 690, 1600, 20);

// To create a sprite for the dustbin
dustbin1 = new Dustbin(650, 670, 100, 20);

//  To create sprite for the 2nd dustbin
dustbin2 = new Dustbin(590, 645, 20, 70); 

// To create sprite for the 3rd dustbin
dustbin3 = new Dustbin(710, 645, 20, 70);

// To run the Physics engine
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  // To create the background
  background(0);
  
  // To display the ground
  ground.display();

  // To display the 1st dustbin
  dustbin1.display();

  // To display the second dustbin
  dustbin2.display();

  // To display the  third dustbin
  dustbin3.display();

  // To display the paper
  paper.display();

  // to draw the sprites
  drawSprites();
 
}

function keyPressed(){
	// When up arrow is pressed the paper goes into the dustbin
	if(keyCode = UP_ARROW){
	Body.applyForce(paper.body, paper.body.position, {x:16, y:-15});
	}
	}



