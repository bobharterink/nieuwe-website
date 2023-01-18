let cnv;


function setup() {
  cnv =createCanvas(windowWidth, windowHeight);
  
}

function draw() {
 cnv.mousePressed(resetskech);
  colorMode(HSB);
 
   noStroke();
    stroke((30*frameCount) % 360, 40, 100);
    fill((30*frameCount) % 360, 100, 100);

    // ellipse(mouseX, mouseY, 30,30);
    strokeWeight(100);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  
  colorMode(RGB);
  
  function resetskech() {
  cnv =createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
 
   noStroke();
    stroke((30*frameCount) % 360, 40, 100);
    fill((30*frameCount) % 360, 100, 100);

    // ellipse(mouseX, mouseY, 30,30);
    strokeWeight(100);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  
  colorMode(RGB);

}
}