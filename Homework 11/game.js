// Player
var PlayerX = 20;
var PlayerY = 20;

// Enemy 1
var Enemy1X = 60;
var Enemy1Y = 300;
var radius = 55
var xspeed = 5; 
var yspeed = 5; 
var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom

// Enemy 2
var Enemy2X = 345;
var Enemy2Y = 580;
var Enemy2XSpeed;
var Enemy2YSpeed;

var mousex = 0;
var mousey = 0;

function setup() {
  createCanvas(500,600);
  Enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) - 1);
  Enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
}

function draw() 
{
  background(0);
  fill(255);
// exit message
  textSize(15);
  text("EXIT", width-50,height-85) 
  rect(486,500,15,85);

// Player  
  fill(59,250,47);
// Key  
  // W
  if(keyIsDown(87))
  {
      PlayerY-=5;
  }
  // A
  if(keyIsDown(65))
  {
      PlayerX-=5;
  }
  // S
  if(keyIsDown(83))
  {
      PlayerY+=5;
  }
  // D
  if(keyIsDown(68))
  {
      PlayerX+=5;
  }
  ellipse(PlayerX, PlayerY, 30, 30);
 //Exit
  if(PlayerX > width && PlayerY > width-50)    
  {
     fill(255);
     textSize(26);
     text("You Win!", 195, 200);
  }  

  
// Enemy 1
  fill(132,1,251);
  square(Enemy1X,Enemy1Y,radius)
  Enemy1X = Enemy1X + xspeed * xdirection;
  Enemy1Y = Enemy1Y + yspeed * ydirection;
  if (Enemy1X > width - radius || Enemy1X < 0) 
  {
     xdirection *= -1;
  }
  if (Enemy1Y > height - radius || Enemy1Y < 0) 
  {
    ydirection *= -1;
  } 
  
// Enemy 2
  fill(237, 34, 93);
  square (Enemy2X,Enemy2Y,20);
  Enemy2X += Enemy2XSpeed;
  Enemy2Y += Enemy2YSpeed;
      if(Enemy2X  > width)
    {
        Enemy2X  = 0;
    }
    if(Enemy2X  < 0)
    {
        Enemy2X = width;
    }
    if(Enemy2Y > height)
    {
        Enemy2Y = 0;
    }
    if(Enemy2Y < 0)
    {
        sEnemy2Y = height;
    }
  
// Mouse click
   fill (17,249,235);   
   ellipse(mousex, mousey, 7, 50);
    }
    function mousePressed()
    {
        mousex = mouseX;
        mousey = mouseY;
  
// Exit
    if(PlayerX > width && PlayerY > width-50)
    {
        fill(255);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }      
  
}