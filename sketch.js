var canvas;
var music;
var object;
var blue, red, yellow, green;
var Edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup() {
  createCanvas(600, 600);
  
  blue = createSprite(78, 580, 136, 15)
  blue.shapeColor = "blue";
  
  red = createSprite(224, 580, 136, 15)
  red.shapeColor = "red";
 
  green = createSprite(370, 580, 136, 15)
  green.shapeColor = "green";

  yellow = createSprite(516, 580, 136, 15)
  yellow.shapeColor = "yellow";

  object = createSprite(Math.round(random(50, 550)), 150, 30, 30);
  object.shapeColor = "white";
  object.velocityX = 4;
  object.velocityY = 3;
  

}
function draw() {
  background("gray");
    Edges = createEdgeSprites();
    object.bounceOff(Edges);
    
    
    

    if(blue.isTouching(object)){
        object.shapeColor = "blue";
        object.bounceOff(blue);
        music.play();
    }
    if(green.isTouching(object)){
        object.shapeColor = "green";
        object.velocityX = 0;
        object.velocityY = 0;
    }
    if(red.isTouching(object)){
        object.shapeColor = "red";
        object.bounceOff(red);
    }
    if(yellow.isTouching(object)){
        object.shapeColor = "yellow";
        object.bounceOff(yellow);
    }

  drawSprites();
}
