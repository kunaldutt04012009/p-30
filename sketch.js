const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;


function setup(){
    createCanvas(900,800);

    engine=Engine.create();
    world=engine.world;

  

    ground= new Ground(450,790,900,20);
    stand1= new Ground(390,300,250,10);
    stand2= new Ground(700,200,200,10);

    fill("yellow");
    polygon= new Polygon(50,200,40);
    slingshot=new Sling(polygon.body,{x:100,y:200});
    b1=new Block(300,275,30,40);
    b2=new Block(330,275,30,40);
    b3=new Block(360,275,30,40);
    b4=new Block(390,275,30,40);
    b5=new Block(420,275,30,40);
    b6=new Block(450,275,30,40);
    b7=new Block(480,275,30,40);
    
    b8=new Block(330,235,30,40);
    b9=new Block(360,235,30,40);
    b10=new Block(390,235,30,40);
    b11=new Block(420,235,30,40);
    b12=new Block(450,235,30,40);

    b13=new Block(360,195,30,40);
    b14=new Block(390,195,30,40);
    b15=new Block(420,195,30,40);

    b16=new Block(390,155,30,40);

    blocks1 = new Block(640,175,30,40);
    blocks2 = new Block(670,175,30,40);
    blocks3 = new Block(700,175,30,40);
    blocks4 = new Block(730,175,30,40); 
    blocks5 = new Block(760,175,30,40); 
    //level two 
    blocks6 = new Block(670,135,30,40);
    blocks7 = new Block(700,135,30,40);
    blocks8 = new Block(730,135,30,40);
    blocks9 = new Block(700,95,30,40);
   
}
function draw(){
    background(0);

    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();


     
    polygon.display();
    slingshot.display();
    
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()


}