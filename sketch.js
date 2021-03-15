const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var block, slingShot, ground, stand1, stand2, polygon_Img, ball;
var engine, world;

function preload(){
    polygon_Img = loadImage("polygon.png");
}

function setup(){
    createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    block1 = new Blocks(300,275,30,40);
    block2 = new Blocks(330,275,30,40);
    block3 = new Blocks(360,275,30,40);
    block4 = new Blocks(390,275,30,40);
    block5 = new Blocks(420,275,30,40);
    block6 = new Blocks(450,275,30,40);
    block7 = new Blocks(480,275,30,40);
    block8 = new Blocks(330,235,30,40);
    block9 = new Blocks(360,235,30,40);
    block10 = new Blocks(390,235,30,40);
    block11 = new Blocks(420,235,30,40);
    block12 = new Blocks(450,235,30,40);
    block13 = new Blocks(360,195,30,40);
    block14 = new Blocks(390,195,30,40);
    block15 = new Blocks(420,195,30,40);
    block16 = new Blocks(390,155,30,40);
    
}

function draw(){
    background(0)
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
}