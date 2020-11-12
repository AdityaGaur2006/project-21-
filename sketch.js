var wall,thickness;
var speed,weight,bullet;



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

 
  
  
  
  function setup() {
    createCanvas(1600,400);
    speed=random(55,90);
    weight=random(400,1500);
  
    bullet = createSprite(50,200,50,50);
    bullet.velocityX=speed;
    wall=createSprite(1500,200,60,height/2);
    wall.shapeColor=color(80,80,80);
  
  }
  
 

}

function draw() {
  background("black");
  
  }
  function hasCollided(bullet,wall) {
    bulletRightEdge=bullet.x + bullet.width;
    wallleftEdge= wall.x;
    if (bulletRightEdge>=wallleftEdge)
    {
      return true;
    }
    return false;
  }
  if (hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)
    
    
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);

     }

  }
  if (damage<10) 
  {
    wall.shapeColor=color(0,255,0);
  }

  
  drawSprites();
