let s = function (p) {

let facemesh;
let video;
let predictions = [];
let tx;


p.setup = function () {
p5.disableFriendlyErrors = true
 // het laden van het model duurt even..
 p.createCanvas(p.windowWidth, p.windowHeight);
 video = p.createCapture(p.VIDEO);
 video.size(p.width, p.height);
 
 facemesh = ml5.facemesh(video, p.modelReady);
 facemesh.on("face", results => {
  predictions = results;
 });

 video.hide();
 tx = p.windowWidth / 640;
}

p.modelReady = function () {

}

p.draw = function () {
 p.background(255,255,255);
 // toont de video. kan ook weg als je enkel de lijn wil zien.

 // onderstaande functie toont alle punten en plot ze uit.
 // als je ze wil zien moet je de comment // wegdoen.
 //drawKeypoints();
 //
 // berekening van het gemiddelde van alle locaties en een lijn die ze volgt op de x-as
 p.calculateAverage()
}


p.calculateAverage = function () {
 let totalx = 0;
 for (let i = 0; i < predictions.length; i += 1) {
  const keypoints = predictions[i].scaledMesh;
  for (let j = 0; j < keypoints.length; j += 1) {
   const [x, y] = keypoints[j];
   totalx += x * tx;
  }
  totalx = totalx / keypoints.length;
 }
 p.stroke(0, 0, 0);
 p.strokeWeight(8.0);
 p.line(p.width / 2, 0, totalx, p.height);
}

p.drawKeypoints = function () {
 for (let i = 0; i < predictions.length; i += 1) {
  const keypoints = predictions[i].scaledMesh;

  for (let j = 0; j < keypoints.length; j += 1) {
   const [x, y] = keypoints[j];
   //console.log(x);

   p.fill(0, 255, 0);
   p.ellipse(x, y, 5, 5);
  }
 }
}
};
var myp5 = new p5(s, 'vrouwdiv');


////////////// lijntje

let t = function (p) {


p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }
  
p.draw = function () {
    p.background(0);
   
    p.line(50,p.height/2, p.windowWidth-50, p.height/2);
    p.stroke(255);
    let gradient = p.drawingContext.createLinearGradient(50,p.height/2, p.windowWidth-50, p.height/2);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(0.5, "white");
    gradient.addColorStop(1, "black");
    p.drawingContext.strokeStyle = gradient;
    if(p.mouseX>50 && p.mouseX<p.windowWidth-50 && p.mouseY<p.windowHeight/2+10 && p.mouseY>p.windowHeight/2-10){
      p.drawingContext.shadowBlur = 50;
      p.drawingContext.shadowColor = 'white';
      p.fill(255,255,255)
      p.ellipse(p.mouseX,p.height/2, 20,20); 
    }
   
  }
};
var lijntjehorizontaal = new p5(t, 'voeling');


////////////// ongelijke figuren

let r = function (q) {

// startlocaties van de 4 punten
let points = [{x:q.windowWidth/2-200,y:q.windowHeight/2-200},{x:q.windowWidth/2+200,y:q.windowHeight/2-200},{x:q.windowWidth/2+200,y:q.windowHeight/2+200},{x:q.windowWidth/2-200,y:q.windowHeight/2+200}]

q.setup = function () {
  let c = q.createCanvas(q.windowWidth, q.windowHeight);
}

q.draw = function () {
  q.background(255);
  q.stroke(0);
  
  // teken alle lijnen via beginShape
  q.beginShape();
  for(p of points){
    q.vertex(p.x,p.y);
  }
  q.fill(255,255,255);
  q.noFill();
  q.endShape(q.CLOSE);
  
  // teken een bolletje op elk punt.
  // als de afstand van het bolletje tov de muislocatie
  // is kleiner dan 30 EN de muis is ingedrukt kan je het
  // bolletje verplaatsen.
  for(p of points){
    if(q.dist(q.mouseX,q.mouseY,p.x,p.y)<50 && q.mouseIsPressed){
      p.x = q.mouseX;
      p.y = q.mouseY;
      q.fill(0,0,0);
    }else{
      q.noFill()
    }
      q.ellipse(p.x,p.y, 10,10);
    }
}
};
var onregelmatigfiguur = new p5(r, 'onregelmatig');

//lijnland inkomen
let a = function (z) {
  z.setup = function() {
    z.createCanvas(z.windowWidth, z.windowHeight);
  }
  
  z.draw = function() {
    z.background(0);
    z.strokeWeight(0);
    z.stroke(0);
    z.fill(255);
      if (z.mouseY <=  z.windowHeight/2+60 && z.mouseY >=  z.windowHeight/2-55) {
     z.rect(z.windowWidth/2+95, z.windowHeight/2, 120, 5);
            }
    z.rect(z.windowWidth/2-75, z.windowHeight/2, 150, 5);
    z.rect(z.windowWidth/2-215, z.windowHeight/2, 120, 5);
    z.rect(z.windowWidth/2+235, z.windowHeight/2, 90, 5);
    z.rect(z.windowWidth/2-325, z.windowHeight/2, 90, 5);
    z.rect(z.windowWidth/2+345, z.windowHeight/2, 60, 5);
    z.rect(z.windowWidth/2-405, z.windowHeight/2, 60, 5);
    z.rect(z.windowWidth/2+425, z.windowHeight/2, 30, 5);
    z.rect(z.windowWidth/2-455, z.windowHeight/2, 30, 5);
    z.rect(z.windowWidth/2+475, z.windowHeight/2, 15, 5);
    z.rect(z.windowWidth/2-490, z.windowHeight/2, 15, 5);
    z.rect(z.windowWidth/2+510, z.windowHeight/2, 15, 5);
    z.rect(z.windowWidth/2-525, z.windowHeight/2, 15, 5);
    
    z.rect(z.windowWidth/2+545, z.windowHeight/2, 15, 5);
    z.rect(z.windowWidth/2-560, z.windowHeight/2, 15, 5);
    z.rect(z.windowWidth/2+580, z.windowHeight/2, 15, 5);
    z.rect(z.windowWidth/2-595, z.windowHeight/2, 15, 5);
    z.rect(z.windowWidth/2+615, z.windowHeight/2, 15, 5);
    z.rect(z.windowWidth/2-630, z.windowHeight/2, 15, 5);

    z.rect(z.windowWidth/2+650, z.windowHeight/2, 15, 5);
    z.rect(z.windowWidth/2-665, z.windowHeight/2, 15, 5);





    z.stroke(255);
    z.strokeWeight(1);
    z.noFill();        
    z.square(z.windowWidth/2+95, z.mouseY-60, 120,);
  }
  
  };
  var lijnmeetvierkant = new p5(a, 'lijnlandinkom');


  let w = function (f) {

    f.setup = function() {
      f.createCanvas(f.windowWidth, f.windowHeight);
      f.noStroke();
    }
    
    f.draw = function() {
      f.background(255);
      f.x = f.mouseX;
      f.y = f.mouseY;
      f.ix = f.windowWidth - f.mouseX;  // Inverse X
      f.iy = f.windowHeight - f.mouseY; // Inverse Y
      f.background(255);
        f.push();
        f.translate(f.width * 0.5, f.height * 0.5);
        f.rotate(f.frameCount / 80.0);
        f.fill(0);
        f.polygon(0, 0, f.windowHeight/2, 5);
        f.pop();
      f.push();
      f.fill(255);
      f.drawingContext.shadowOffsetX = 5;
      f.drawingContext.shadowOffsetY = -5;
      f.drawingContext.shadowBlur = 10;
      f.drawingContext.shadowColor = 'black';
      f.ellipse(f.ix, f.height/2, f.iy, f.iy);      
      f.pop();
  
      }
      
      f.polygon = function (x, y, radius, npoints) {
        f.angle = f.TWO_PI / npoints;
        f.beginShape();
        for (f.a = 0; f.a < f.TWO_PI; f.a += f.angle) {
          f.sx = x + f.cos(f.a) * radius;
          f.sy = y + f.sin(f.a) * radius;
          f.vertex(f.sx, f.sy);
        }
        f.endShape(f.CLOSE);
      }
    };
    var bolmeetdimensietwee = new p5(w, 'bolkomt');

/*     als ik tijd heb kan ik dit aan de schaduw toevoegen
    https://openprocessing.org/sketch/858175/ 5 pagina */
    let bol = function (j) {

      j.setup = function() {
        j.createCanvas(j.windowWidth, j.windowHeight);
        j.noStroke();
      }
      
      j.draw = function() {
        j.background(255);
        j.x = j.mouseX;
        j.y = j.mouseY;
        j.ix = j.windowWidth - j.mouseX;  // Inverse X
        j.iy = j.windowHeight - j.mouseY; // Inverse Y
        j.background(255);
        j.drawingContext.shadowOffsetX = 0;
        j.drawingContext.shadowOffsetY = 0;
        j.drawingContext.shadowBlur = 0;
        j.drawingContext.shadowColor = 'black';
      j.stroke(0);
        j.fill(255);
        j.rect(j.x-(j.y/2),j.height/2-(j.y/2),j.y,j.y);
        j.drawingContext.shadowOffsetX = 5;
        j.drawingContext.shadowOffsetY = -5;
        j.drawingContext.shadowBlur = 10;
        j.drawingContext.shadowColor = 'black';
        j.stroke(0);
        j.fill(255);
        j.ellipse(j.ix, j.height/2, j.iy, j.iy);        
    
        }
        
        j.polygon = function (x, y, radius, npoints) {
          j.angle = j.TWO_PI / npoints;
          j.beginShape();
          for (j.a = 0; j.a < j.TWO_PI; j.a += j.angle) {
            j.sx = x + j.cos(j.a) * radius;
            j.sy = y + j.sin(j.a) * radius;
            j.vertex(j.sx, j.sy);
          }
          j.endShape(j.CLOSE);
        }
      };
      var bolmeetvierkant = new p5(bol, 'ontmoetingbol');


/*     let w = function (f) {

      f.setup = function() {
        f.createCanvas(f.windowWidth, f.windowHeight);
        f.noStroke();
      }
      
      f.draw = function() {
        f.background(255);
        f.x = f.mouseX;
        f.y = f.mouseY;
        f.ix = f.windowWidth - f.mouseX;  // Inverse X
        f.iy = f.windowHeight - f.mouseY; // Inverse Y
        f.background(255);
          f.push();
          f.translate(f.x, f.height * 0.5);
          f.rotate(60.0);
          f.fill(0,144);
          f.polygon(0, 0, f.y/2, 5);
          f.pop();
        f.fill(0,144);
        f.ellipse(f.ix, f.height/2, f.iy, f.iy);        
    
        }
        
        f.polygon = function (x, y, radius, npoints) {
          f.angle = f.TWO_PI / npoints;
          f.beginShape();
          for (f.a = 0; f.a < f.TWO_PI; f.a += f.angle) {
            f.sx = x + f.cos(f.a) * radius;
            f.sy = y + f.sin(f.a) * radius;
            f.vertex(f.sx, f.sy);
          }
          f.endShape(f.CLOSE);
        }
      };
      var bolmeetdimensietwee = new p5(w, 'bolkomt'); */



      let bolvier1 = function (b) {

        let radius = 150;
        let angle = 0;
        
        b.setup = function() {
          b.createCanvas(b.windowWidth, b.windowHeight);
          b.rectMode(b.CENTER);
        }
        
        b.draw = function() {
          b.background('#ffffff');
          b.translate(b.windowWidth/2, b.windowHeight/2);
          b.fill('#000000');
          b.drawingContext.shadowOffsetX = 0;
          b.drawingContext.shadowOffsetY = 0;
          b.drawingContext.shadowBlur = 0;
          b.drawingContext.shadowColor = 'white';
          b.ellipse(0, 0, 10, 10);
          b.rotate (angle);
          b.drawingContext.shadowOffsetX = 5;
          b.drawingContext.shadowOffsetY = -5;
          b.drawingContext.shadowBlur = 10;
          b.drawingContext.shadowColor = 'black';
          b.fill('#ffffff');
          b.ellipse(200, 0, b.mouseY/2-b.windowHeight/4, b.mouseY/2-b.windowHeight/4);
          b.fill('#ffffff');
          b.drawingContext.shadowOffsetX = 0;
          b.drawingContext.shadowOffsetY = 0;
          b.drawingContext.shadowBlur = 0;
          b.drawingContext.shadowColor = 'white';
          b.square(-200,0,200)
          angle = angle + b.mouseX/100000;
        }
        };
        
        var bolvierkant1d = new p5(bolvier1, 'rotatieom1d');


        let lichtaan = function (m) {

          let roofcolor = 0;
          let leftcolor = 0;
          m.setup = function () {
            m.createCanvas(m.windowWidth, m.windowHeight);
            m.rectMode(m.CENTER)
          }
          
          m.draw = function () {
            m.background(255);
            m.stroke(leftcolor)
            m.fill(leftcolor)
            m.quad(m.windowWidth/2-100, m.windowHeight/2+100, m.windowWidth/2-150,m.windowHeight/2+50,m.windowWidth/2-150,m.windowHeight/2-150,m.windowWidth/2-100,m.windowHeight/2-100)
            m.stroke(roofcolor)
            m.fill(roofcolor)
            m.quad(m.windowWidth/2-100,m.windowHeight/2-100,m.windowWidth/2-150,m.windowHeight/2-150,m.windowWidth/2+50,m.windowHeight/2-150,m.windowWidth/2+100,m.windowHeight/2-100)
            m.fill("black")
            m.stroke("black")
            m.square(m.windowWidth/2, m.windowHeight/2, 200)
          }
          
          m.mouseClicked = function () {
            if (leftcolor === 0) {
              leftcolor = 50;
              roofcolor = 220;
              } else {
                  leftcolor = 0;
              roofcolor = 0;
                }
          }
          };
          var aanlicht = new p5(lichtaan, 'diepteeff');

          let threebox = function (boks) {


            boks.setup = function () {
              boks.createCanvas(boks.windowWidth, boks.windowHeight, boks.WEBGL);
              
            }
            boks.draw = function () {
              boks.background(255);
              boks.lights(10);
              boks.rotateX(boks.millis() / 1000);
              boks.rotateY(boks.millis() / 1000);
              boks.rotateZ(boks.millis() / 1000);
              boks.box(200,200,200);
            }
            };
            var vierkantdoos = new p5(threebox, 'blur3dbox');
      
      
  








            let collibol = function (k) {

              k.Ball = class {
                constructor(x, y, r) {
                  this.position = new p5.Vector(x, y);
                  this.velocity = p5.Vector.random2D();
                  this.velocity.mult(3);
                  this.r = r;
                  this.m = r * 0.1;
                }
                update() {
                  this.position.add(this.velocity);
                }
              
                checkBoundaryCollision() {
                  if (this.position.x > k.width - this.r) {
                    this.position.x = k.width - this.r;
                    this.velocity.x *= -1;
                  } else if (this.position.x < this.r) {
                    this.position.x = this.r;
                    this.velocity.x *= -1;
                  } else if (this.position.y > k.height - this.r) {
                    this.position.y = k.height - this.r;
                    this.velocity.y *= -1;
                  } else if (this.position.y < this.r) {
                    this.position.y = this.r;
                    this.velocity.y *= -1;
                  }
                }
              
                checkCollision(other) {
                  // Get distances between the balls components
                  let distanceVect = p5.Vector.sub(other.position, this.position);
              
                  // Calculate magnitude of the vector separating the balls
                  let distanceVectMag = distanceVect.mag();
              
                  // Minimum distance before they are touching
                  let minDistance = this.r + other.r;
              
                  if (distanceVectMag < minDistance) {
                    let distanceCorrection = (minDistance - distanceVectMag) / 2.0;
                    let d = distanceVect.copy();
                    let correctionVector = d.normalize().mult(distanceCorrection);
                    other.position.add(correctionVector);
                    this.position.sub(correctionVector);
              
                    // get angle of distanceVect
                    let theta = distanceVect.heading();
                    // precalculate trig values
                    let sine = k.sin(theta);
                    let cosine = k.cos(theta);
              
                    /* bTemp will hold rotated ball this.positions. You 
                     just need to worry about bTemp[1] this.position*/
                    let bTemp = [new p5.Vector(), new p5.Vector()];
              
                    /* this ball's this.position is relative to the other
                     so you can use the vector between them (bVect) as the 
                     reference point in the rotation expressions.
                     bTemp[0].this.position.x and bTemp[0].this.position.y will initialize
                     automatically to 0.0, which is what you want
                     since b[1] will rotate around b[0] */
                    bTemp[1].x = cosine * distanceVect.x + sine * distanceVect.y;
                    bTemp[1].y = cosine * distanceVect.y - sine * distanceVect.x;
              
                    // rotate Temporary velocities
                    let vTemp = [new p5.Vector(), new p5.Vector()];
              
                    vTemp[0].x = cosine * this.velocity.x + sine * this.velocity.y;
                    vTemp[0].y = cosine * this.velocity.y - sine * this.velocity.x;
                    vTemp[1].x = cosine * other.velocity.x + sine * other.velocity.y;
                    vTemp[1].y = cosine * other.velocity.y - sine * other.velocity.x;
              
                    /* Now that velocities are rotated, you can use 1D
                     conservation of momentum equations to calculate 
                     the final this.velocity along the x-axis. */
                    let vFinal = [new p5.Vector(), new p5.Vector()];
              
                    // final rotated this.velocity for b[0]
                    vFinal[0].x =
                      ((this.m - other.m) * vTemp[0].x + 2 * other.m * vTemp[1].x) /
                      (this.m + other.m);
                    vFinal[0].y = vTemp[0].y;
              
                    // final rotated this.velocity for b[0]
                    vFinal[1].x =
                      ((other.m - this.m) * vTemp[1].x + 2 * this.m * vTemp[0].x) /
                      (this.m + other.m);
                    vFinal[1].y = vTemp[1].y;
              
                    // hack to avoid clumping
                    bTemp[0].x += vFinal[0].x;
                    bTemp[1].x += vFinal[1].x;
              
                    /* Rotate ball this.positions and velocities back
                     Reverse signs in trig expressions to rotate 
                     in the opposite direction */
                    // rotate balls
                    let bFinal = [new p5.Vector(), new p5.Vector()];
              
                    bFinal[0].x = cosine * bTemp[0].x - sine * bTemp[0].y;
                    bFinal[0].y = cosine * bTemp[0].y + sine * bTemp[0].x;
                    bFinal[1].x = cosine * bTemp[1].x - sine * bTemp[1].y;
                    bFinal[1].y = cosine * bTemp[1].y + sine * bTemp[1].x;
              
                    // update balls to screen this.position
                    other.position.x = this.position.x + bFinal[1].x;
                    other.position.y = this.position.y + bFinal[1].y;
              
                    this.position.add(bFinal[0]);
              
                    // update velocities
                    this.velocity.x = cosine * vFinal[0].x - sine * vFinal[0].y;
                    this.velocity.y = cosine * vFinal[0].y + sine * vFinal[0].x;
                    other.velocity.x = cosine * vFinal[1].x - sine * vFinal[1].y;
                    other.velocity.y = cosine * vFinal[1].y + sine * vFinal[1].x;
                  }
                }
              
                display() {
                  k.stroke(0);
                  k.fill(255);
                  k.drawingContext.shadowOffsetX = 5;
                  k.drawingContext.shadowOffsetY = -5;
                  k.drawingContext.shadowBlur = 10;
                  k.drawingContext.shadowColor = 'black';
                  k.ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2);
                }
              }
               let balls = [new k.Ball(100, 400, 100), new k.Ball(700, 400, 200)];
              k.setup = function () {
                k.createCanvas(k.windowWidth, k.windowHeight);
              }
              
              k.draw = function () {
                k.background(255);
                for (let i = 0; i < balls.length; i++) {
                  let b = balls[i];
                  b.update();
                  b.display();
                  b.checkBoundaryCollision();
                  balls[0].checkCollision(balls[1]);
                }
              }
                
              };
              var bouncebollen = new p5(collibol, 'collition2d3d');
              