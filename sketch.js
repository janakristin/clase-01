var a = 50, b = 80;
var c;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  frameRate(10); //Especifica el número de cuadros mostrados                     por segundo.
}

function draw() {
  //colorMode (RGB)
  colorMode(HSB,360,100,100); //hue, saturation, brigthness 
  /*
  hue = Farbton
  saturation = Saettigung
  brightness = helligkeit
  */
  //background(0,100,100); //RGB Zahlen
  /* sin background se puede dibujar con el ellipse porque el 
  background esta blanco 
 */
  //fill(0,50,100); //HSB
  fill(random(0,30),100,100);
  noStroke();
  c = a * random(1,5); // random contiene ([min],[max])
  ellipse(mouseX,mouseY,c,c); //1, 2: posición, 3, 4: ancho                                 y altura
  /*
  ellipse(10,10,10,10); -> posición definido
  con mouseX y mouseY (en posición 1 y 2) el mouse define la posición 
  ellipse(mouseX,mouseY,10,10);
  */
}
