var hair1X = 400;
var hair1Y = 240;
var hair1Direction = 3;

var hair2X = 330;
var hair2Y = 106;
var hair2Direction = -8;

var g1X = 325;
var g1Y = 200;
var g1Direction = 1;

var g2X = 425;
var g2Y = 200;
var g2Direction = 5;

var lineX = 425;
var lineY = 220;
var lineDirection = 4;

var size = 7;
var count = 0;
var sizeDirection = 5;

var textX = 600; 
var textY = 570;

var xspeed = 2.8; 
var yspeed = 2.2; 

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom

   function setup()
  {
      createCanvas(800, 600);
      frameRate(30);
  }

  function draw()
  { 
      colorMode(RGB);
      background(0,0,0);
      let from = color(32,178,170);
      let to = color(72, 61, 139);
      colorMode(RGB);
      let interA = lerpColor(from, to, 0.3);
      let interB = lerpColor(from, to, 0.6);
      fill(from);
      rect(0, 0, 800, 150);
      fill(interA);
      rect(0, 150, 800, 150);
      fill(interB);
      rect(0, 300, 800, 150);
      fill(to);
      rect(0, 450, 800, 150);
    
      // Title
      fill(25,25,112);
      textSize(size);
      size+= sizeDirection;
      count++;
      if(count > 5)
      {
      sizeDirection *=-1;
      count = 0;
      }
      text("GLIMPSE" , 350,30)

      // hair1  
      fill(0,0,0);
      ellipse(hair1X,240,215,350);
      hair1X+=hair1Direction;
      if(hair1X >= 690 || hair1X <= 110)
      {
        hair1Direction *= -1;
      }

      // neck
      fill(250,235,215);
      rect(370,325,60,65);

      // head
      fill(250,235,215);
      ellipse(400, 220, 165, 230);

      // hair2
      fill(0,0,0);
      rect(hair2X,106,140,65);
      hair2X+=hair2Direction;
      if(hair2X >= 660 || hair2X <= 5)
      {
        hair2Direction *= -1;
      }
    
      // glasses
      fill(255);
      square(325,g1Y,50);
      g1Y += g1Direction;
      if(g1Y <= 0 || g1Y >= 600 )
      {
        g1Direction *= -1;
      }
      square(g2X,g2Y,50);
      if(g2X >= 800 || g2X <= 0)
      {
        g2Direction *= -1;
      }
        g2X += g2Direction;
      if(g2Y <= 0)
      {
        g2Direction *= -1;
      }
        g2Y += g2Direction;   
      line(425,lineY,375,lineY);
      lineY += lineDirection
      if(lineY <= 20 || lineY >= 620 )
      {
        lineDirection *= -1;
      }
    
      // nose
      point(390,270);
      point(410,270);
      
      // body
      fill(250,235,215);
      ellipse(400, 435, 165, 110);

      // arms
      fill(178,34,34)
      rect(250,420,50,190);
      rect(500,420,50,190);

      // shirt
      fill(139,0,0);
      triangle(270, 410, 400, 720, 530, 410);
      ellipse(280, 420, 120, 80);
      ellipse(515, 420, 120, 80);

      fill(215,25,112);
      textSize(22);
      text("Ashley Gibbons",textX,textY);
      textX = textX + xspeed * xdirection;
      textY = textY + yspeed * ydirection;
      if (textX > 600 || textX < 0) 
      {
        xdirection *= -1;
      }
      if (textY > 590 || textY < 0) 
      {
        ydirection *= -1;
      }  
}