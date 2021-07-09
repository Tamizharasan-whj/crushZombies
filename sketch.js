const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope;
var stones = [];
var zombie;
var land1;
var land2;
var bridgeConnection;
var base;
var stone;





function setup() {
  createCanvas(700, 500);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
   land1 = new land(50,350,100,300);
   land2 = new land(650,350,100,300);
   rope = new Bridge(14,{x:80,y:200});
   bridgeConnection = new link(rope);
   base = new land(350,490,700,20);

   for(var i = 0;i<=8;i++){
     var x =random(100,600);
     var y =random(160,180);
     stone = new Stone(x,y,20);
     stones.push(stone);
     }
  
}

function draw() {
  background(51);
  land1.show();
  land2.show();
  rope.show();
  base.show();
  stone.show();

  
  
  Engine.update(engine);


}
