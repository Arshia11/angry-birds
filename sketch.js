const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint= Matter.MouseConstraint
const Mouse=Matter.Mouse

var engine, world;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var backgroundImg;
var gameState="onSling"
var score=0;

var slingshot
var sling1Image
var sling2Image
var MConstraint





function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    sling1Image= loadImage("sprites/sling1.png")
    sling2Image=loadImage("sprites/sling2.png")

    getBgImage();


}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,590,1200,20);
    platform= new Ground(150,475,300,240)
    
    box1 = new Box(800,540,70,70);
    box2 = new Box(1000,540,70,70);
    pig1 = new Pig(900, 540);
    log1 = new Log(900,500,280, PI/2);

    box3 = new Box(800,450,70,70);
    box4 = new Box(1000,450,70,70);
    pig2 = new Pig(900, 450);

    log2 =  new Log(900,410,280, PI/2);

    box5 = new Box(900,360,70,70);
    log3 = new Log(840,360,150, PI/7);
    log4 = new Log(960,360,150, -PI/7);
   
    bird = new Bird(270,170);
    
    slingshot=new Slingshot(bird.body,{x:270,y:170});
    var canvasMouse=Mouse.create(canvas.elt)
    canvasMouse.pixelRatio=pixelDensity();
    var options={
    mouse:canvasMouse
    }
    MConstraint=MouseConstraint.create(engine,options);
    World.add(world,MConstraint)


}

function draw(){
    //if (backgroundImg)
    background(backgroundImg);
    
    Engine.update(engine);
    textSize(35)
    fill("white")
    text("Score"+ score,1000,50)
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    pig1.score();
    pig2.score();
image (sling1Image,270,160);
    bird.display();
    image (sling2Image,245,160)
    platform.display();
    slingshot.display();
    if(gameState==="launched"){
        World.remove(world,MConstraint)
    }


}//use it for project without mouse constraint
//function mouseDragged(){
 //   Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    
//}

//function mouseReleased(){
  //  slingshot.fly();
//}
function mouseReleased(){
    
    setTimeout(function (){
        
            slingshot.fly();
        
    },150)
    gameState="launched"
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(bird.body,{x:270,y:170})
        Matter.Body.setVelocity(bird.body,{x:0,y:0})
        slingshot.attach(bird.body);
        Matter.Body.setAngle(bird.body,0);
        gameState="onSling"
        World.add(world,MConstraint)
    }
}

async function getBgImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson= await response.json();
    var datetime= responsejson.datetime
    var hour=datetime.slice(11,13);
    console.log(hour)
var bg ;
    if(hour>6&& hour<15)
    {
        bg="sprites/bg.png"
    
        

    }
    else {
        bg="sprites/bg2.jpg"
    }
    backgroundImg=loadImage(bg)

}
