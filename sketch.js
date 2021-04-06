
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeimg;
var ground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var boy, boyImg;
var stone;
var chain1, chain2, chain3, chain4, chain5, chain6, chain7, chain8;
function preload(){
	tree = loadImage("images/tree.png");
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
	//boy sprite..
	boy = createSprite(100, 600, 50, 50);
	boy.addImage("image", boyImg);
	boy.scale = 0.15;
	//Create the Bodies Here.
	//tree objects...
	tree = new Tree(750, 429, 450, 550);
	//ground object...
	ground = new Ground(500, 690, 1000, 20);
	//mango objects...
	mango1 = new Mango(570, 360, 40);
	mango2 = new Mango(690, 380, 60);
	mango3 = new Mango(820, 400, 80);
	mango4 = new Mango(740, 340, 40);
	mango5 = new Mango(850, 300, 50);
	mango6 = new Mango(690, 300, 45);
	mango7 = new Mango(875, 270, 40);
	mango8 = new Mango(740, 230, 40);
	//stone object...
	stone = new Stone(50, 600, 50);
	//connection
	chain1 = new Chain(stone, mango1);
	chain2 = new Chain(stone, mango2);
	chain3 = new Chain(stone, mango3);
	chain4 = new Chain(stone, mango4);
	chain5 = new Chain(stone, mango5);
	chain6 = new Chain(stone, mango6);
	chain7 = new Chain(stone, mango7);
	chain8 = new Chain(stone, mango8);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  //tree display...
  tree.display();
  //ground display...
  ground.display();
  //mangoes objects...
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  //stone display....
  stone.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  chain7.display();
  chain8.display();
  drawSprites();
 }



