void setup() {
  size(550, 550);
}

void draw() {
  background(50);

  strokeWeight(8);
  stroke(200);

  noFill();
  strokeWeight(2);
  stroke(200, 0, 0);
  strokeJoin(ROUND); 
  drawHeart(width/2, height/2, 8);  
}

void drawHeart(int ox, int oy, int size) {
  pushMatrix();
  translate(ox, oy);
  beginShape();
  for (int theta = 0; theta < 360; theta++) {
    float x = size * (16 * sin(radians(theta)) * sin(radians(theta)) * sin(radians(theta)));
    float y = (-1) * size * (13 * cos(radians(theta)) - 5 * cos(radians(2 * theta))
      - 2 * cos(radians(3 * theta)) - cos(radians(4 * theta)));

    vertex(x, y);
  }
  endShape(CLOSE);
  popMatrix();
}

int count=1;

void keyPressed(){
  if(keyCode == ENTER)
  {
    save("image"+count+".jpg");
    count++;
  }
}
