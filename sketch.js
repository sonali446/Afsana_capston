
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var helicopter,package,boy;
var ground;
var background_img;
var package;
var girl;
var star_img, star2, star;
var empty_star, one_star, two_star, star_display;
var food;
var rope;



function preload(){
  background_img = loadImage("flood2.gif")
  happy_Boy = loadImage("happy.png")
  happy_girl = loadImage("happyg.png")
  sad_girl = loadImage("sadg.png")
  helicopter_img = loadImage("helicopter.png")
  water_img = loadImage("water.png")
  package_img = loadImage("package.png");
  empty_star = loadImage('empty.png');
  one_star = loadImage('one_star.png');
  two_star = loadImage('stars.png');

  sad_boy = loadImage('sadb.png')

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);


  engine = Engine.create();
  world = engine.world;

  button = createImg('helicopter.png');
  button.position(80,10);
  button.size(90,90);
  button.mouseClicked(drop);

rope = new Rope(7,{x:100,y:70});

ground = new Ground(500,680,1000,20);

var options = {
  restitution:0.8
}

var ground_options={
  isStatic:true
}

//boy = Bodies.circle(200,400,30);
//World.add(world, boy);

boy=createSprite(200,400,50,50);

//ground2= Bodies.rectangle(500,680,1000,20,ground_options)
//World.add(world,ground2);


  
  /*star_display = createSprite(50, 20, 30, 30);
  star_display.scale = 0.2;
  star_display.addAnimation('empty', empty_star);
  star_display.addAnimation('one',one_star);
  star_display.addAnimation('two',two_star);
  star_display.changeAnimation('empty');*/

package = Bodies.circle(300,300,20);
//World.add(world, package);
Matter.Composite.add(rope.body,package);

package_con = new Link(rope,package);
  

ellipseMode(RADIUS);
rectMode(CENTER);
  
}


function draw() 
{
  background(background_img);
 ground.show();
 rope.show();
  //image(background_img,0 , 0, width, height);
  drawSprites();
  push()
  imageMode(CENTER);
  image(happy_Boy, boy.position.x, boy.position.y, 150, 150);
   pop()

 
   push()
  imageMode(CENTER);
  image(package_img, package.position.x, package.position.y, 50, 50);
  pop()


  
 // rect(ground2.position.x,ground2.position.y,1000,20);

 if(keyIsDown(LEFT_ARROW)){

  Matter.Body.setVelocity(boy ,{x:-0.9, y:0})
 }
  
if(keyIsDown(RIGHT_ARROW)){

  Matter.Body.setVelocity(boy ,{x:0.9, y:0})
 }

  

 /* if(collide(package,boy,80)==true)
  {
    World.remove(engine.world,package);
    package = null;
  }

  if(package!=null && package.position.y>=650)
  {
    boy.changeImage('sad_boy');
    package=null;
   }

  /*push();
  imageMode(CENTER);
  if(package!=null){
    image(food,package.position.x,package.position.y,70,70);
  }
  pop();

  if(collide(package,boy)==true)
  {
    World.remove(engine.world,package);
    package = null;
    boy.changeImage("happy.png");

  }*/

  /*if(package!=null && package.position.y>=650)
  {
    boy.changeImage("sadb.png");
    package=null;
   }*/
   
   
  Engine.update(engine);
 
  
}

function drop()
{
  rope.break();
  package_con.dettach();
  package_con = null;
  
}

function collide(body,sprite, x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}


