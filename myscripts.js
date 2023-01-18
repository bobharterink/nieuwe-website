// function clickEffect(e){
//        var d=document.createElement("div");
//        d.className="clickEffect";
//        d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
//        document.body.appendChild(d);
//        d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
//    }
//   document.addEventListener('click',clickEffect);

// jQuery(document).ready(function() {

//     var mouseX = 0, mouseY = 0;
//     var xp = 0, yp = 0;
     
//     $(document).mousemove(function(e){
//       mouseX = e.pageX - 300;
//       mouseY = e.pageY - 360; 
//     });
      
//     setInterval(function(){
//       xp += ((mouseX - xp)/6);
//       yp += ((mouseY - yp)/6);
//       $("#followpunt").css({left: xp +'px', top: yp +'px'});
//     }, 20);
  
//   });


//function myFunction() {
//    document.getElementById("extramenu").style.visibility = "visible";
//  }


const colorMap = [
  '#1abc9c',
  '#3498db',
  '#9b59b6'
];

class Mover {
  color = color(random(colorMap));
  maxSpeed = 6;
  rotation: number;

  constructor(
    public position: p5.Vector = createVector(0, 0),
    public velocity: p5.Vector = createVector(0, 0),
    public acceleration: p5.Vector =  createVector(0, 0)
  ) {}

  update() {
    const mouse = createVector(mouseX, mouseY);

    this.acceleration = p5.Vector.sub(mouse, this.position);
    this.acceleration.setMag(0.2);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);

    const vd = p5.Vector.sub(mouse, this.position);

    this.rotation = atan2(vd.y, vd.x);
  }

  draw() {
    push();
      translate(this.position.x, this.position.y);
      rotate(this.rotation);
      noStroke();
      rect(-20, -5, 20, 5);
      fill(this.color);
      rect(0, -5, 5, 5);
    pop();
  }
}

let movers: Mover[] = [];

function setup() {
  const { innerWidth, innerHeight } = window;

  createCanvas(innerWidth, innerHeight);
  
  for (let i = 0; i < 20; i += 1) {
    movers.push(new Mover(
      new p5.Vector(random(0, width), random(0, height))
    ));
  }
}

function draw() {
  background(33);

  movers.forEach((mover) => {
    mover.update();
    mover.draw();
  });
}

function windowResized() {
  const { innerWidth, innerHeight } = window;

  resizeCanvas(innerWidth, innerHeight);
}
