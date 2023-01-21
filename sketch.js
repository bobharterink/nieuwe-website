let s = function (p) {

let facemesh;
let video;
let predictions = [];
let tx;


p.setup = function () {

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
    if(q.dist(q.mouseX,q.mouseY,p.x,p.y)<30 && q.mouseIsPressed){
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
      f.fill(255);
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
          angle = angle + b.mouseX/10000;
        }
        };
        
        var bolvierkant1d = new p5(bolvier1, 'hfst20');


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
          var aanlicht = new p5(lichtaan, 'hfst19');

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
            var vierkantdoos = new p5(threebox, 'hfst22');
      
      
  
