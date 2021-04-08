const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,box1

function setup() {
  var canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500,450,300,10)
  ground2 = new Ground(900,300,300,10)


  fill(201, 72, 32)
  box1 = new Box(440,440,20,30)
  box2 = new Box(460,440,20,30)
  box3 = new Box(480,440,20,30)
  box4 = new Box(500,440,20,30)
  box5 = new Box(520,440,20,30)
  box6 = new Box(540,440,20,30)
  box7 = new Box(560,440,20,30)

  box8 = new Box(460,410,20,30)
  box9 = new Box(480,410,20,30)
  box10 = new Box(500,410,20,30)
  box11 = new Box(520,410,20,30)
  box12 = new Box(540,410,20,30)

  box13 = new Box(480,380,20,30)
  box14 = new Box(500,380,20,30)
  box15 = new Box(520,380,20,30)

  box16 = new Box(500,350,20,30)
  

  box17 = new Box(840,290,20,30)
  box18 = new Box(860,290,20,30)
  box19 = new Box(880,290,20,30)
  box20 = new Box(900,290,20,30)
  box21 = new Box(920,290,20,30)
  box22 = new Box(940,290,20,30)
  box23 = new Box(960,290,20,30)

  box24 = new Box(860,260,20,30)
  box25 = new Box(880,260,20,30)
  box26 = new Box(900,260,20,30)
  box27 = new Box(920,260,20,30)
  box28 = new Box(940,260,20,30)

  box29 = new Box(880,230,20,30)
  box30 = new Box(900,230,20,30)
  box31 = new Box(920,230,20,30)

  box32 = new Box(900,200,20,30)

  polygon = new Polygon(200,600,6,5)

  slingshot = new Slingshot(polygon.body,{x:200, y:300})
}

function draw() {
  background(255);  
  Engine.update(engine);

  ground1.display()
  ground2.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()

  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  box27.display()
  box28.display()
  box29.display()
  box30.display()
  box31.display()
  box32.display()
  
  polygon.display()
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode == 32){
      slingshot.attach(polygon.body)

  }
}