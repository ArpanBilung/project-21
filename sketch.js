var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

speed = random(223,321)
weight = random(30,52)

thickeness=random(22,83)

bullet=createSprite(50,200,50,5);
bullet.velocityX = speed;
bullet.shapeColor ="red";
//bullet.debug = true;
bullet.X = 10;

wall=createSprite(1200,200.,thickness,height/2);
wall.shapeColor="grey";
// wall.debug = true;

}

function draw() {
  background(0);  
  if(wall.x-bullet.x<(bullet.width+wall.width)){
   
    bullet.velocityX=0;
    var deformation=0.5*width*speed/22509;
    
    if (deformation>180) {
      bullet.shapeColor=color(255,0,0)
     }
    
     if(deformation<180 && deformation>100){
        bullet.shapeColor=color(230,230,0)
       } 
    
    if(deformation>100){
      bullet.shapeColor=color(0,255,0)
    }
    
    drawSprites();
    hasCollided(lbullet,lwall);
    
    if (bullet.x - wall.x < wall.width/2 + bullet.width/2){
    }
  }

 }

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdg>=wallLeftEdge) {
  
  return true 
}
return false;
}
if (hasCollided(bullet,wall)){
  bullet.velocityX = o;
  var damage=0.5 * weight*speed*speed/(thickness*thickness*thickness);
if (damage>10) {
 wall.shapeColor=color(255,0,0); 
}
if (damage10) {
  wall.shapeColor=color(0,255,0); 
}
}