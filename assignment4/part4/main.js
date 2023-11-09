// setup canvas

const pballcount = document.querySelector('p');  //paragragh element to keep count
const maxballs=25;  //define constant with max balls  
var count = maxballs;  //count of balls

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


//class ball
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
/////// add keydown event to move the eo
    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'a':
          this.x -= this.velX;
          break;
        case 'd':
          this.x += this.velX;
          break;
        case 'w':
          this.y -= this.velY;
          break;
        case 's':
          this.y += this.velY;
          break;
      }
    });

//////////////////////
  }

  //draw method to the ball class
draw() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

//update ball's data
update() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}


//collision detection + update
collisionDetect() {

  const dx = this.x - eb.x;
  const dy = this.y - eb.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < this.size + eb.size) {
    
    this.color=randomRGB();
    this.size=0;  //change size to 0 to remove ball
    return(true);  //true when hit

  }
  else{
    return(false);  //return false if there is not hit
  }
  
}


}


//store balls and then populate
const balls = [];

while (balls.length < maxballs) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}


class eo extends Ball{     //class eo aka evil circle 

  draw() {   //draw eo - evil circle
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}

}  


const eb = new eo(width/2,height/2,5,5,"white",10);   //create eb - evil ball 

//loop
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {

    if(ball.size!=0) { //ball exist if size is different from 0
      ball.draw();
      ball.update();
      if (ball.collisionDetect()){ //add collisiondetection
        count--; //decrease counter
        pballcount.textContent='ball count: ' + count; //show text with ball count
      
     }

    }
  }

  eb.draw();  //draw eb - evil ball

  requestAnimationFrame(loop);
}


//call loop
loop();