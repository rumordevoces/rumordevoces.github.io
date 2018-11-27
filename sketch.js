var socket;
var splash = "";

var font,
  fontsize = 29;

var x = 100;
var y = 100;

var xspeed = 2.5;
var yspeed = 0.5;

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  textFont("Avenir-Black");

  socket = io.connect('http://localhost:3011');
  socket.on('mouse', dialogue);

 // background(288, 17, 65);
}

let hue = 0;

function draw() {

  hue = ++hue % 360;

  push();
      //translate(-200, -200);
      mouseDragged();
      //dialogue();
  pop();


if (hue >= 1200){
  hue = 0;
  }
}

function dialogue(splash) {
  var ruidoX4 = 0.000081;
  var posX4 = noise(millis() * ruidoX4) * windowWidth;
  var ruidoY4 = 0.000051;
  var posY4 = noise(millis() * ruidoY4) * windowHeight;  

  var ruidoC4 = 0.000021;
  var posC4 = noise(millis() * ruidoC4) * 80;   
  

  // stroke(0, 0, 0);
  //strokeWeight(3);
  noStroke();
  //  fill(0, 0, hue*4);
  // fill(313, hue%99, 99);
  fill(hue, 400, 400);

  textSize(fontsize = posC4);
  text(splash, posX4, posY4, 400, 400);

}

function mouseDragged() {
  
  var tamango = random (14);

  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data = {
    x:splash
  }
  
  socket.emit('mouse', splash);

  var ruidoX4 = -0.000061;
  var posX4 = noise(millis() * ruidoX4) * windowWidth;
  var ruidoY4 = -0.0001;
  var posY4 = noise(millis() * ruidoY4) * windowHeight;  

  var ruidoC4 = 0.000021;
  var posC4 = noise(millis() * ruidoC4) * 100;   

  x = x + xspeed;
  y = y + yspeed;

  if ((x > windowWidth) || (x < 0)) {
    xspeed = xspeed * -1;
  }

  if ((y > windowHeight) || (y < 0)) {
    yspeed = yspeed * -1;
  }
  //stroke(0, 100);
  //strokeWeight(3);
  //fill(hue, 0, 0);
  //fill(hue*2, 4000, 4000);
  fill(0, 0, hue/4);

  socket.emit('tecla', splash);

  textSize(fontsize = posC4);

  //for (var x = 100; x < windowWidth; x += 4000) {
	//translate(posX4, y);
  	text(splash, posX4, y, 300, 400);
	//}
}


function signo() {
  
/*
  var data = {
    x:mouseX,
    y:mouseY
  }
*/

}

function keyTyped() {
  splash += key;
//  splash1 += random(splash2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
