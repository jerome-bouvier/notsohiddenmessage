const BACKGROUND_COLOR = '#fafafa'

let tiles = 20
let font, fontsize = 20

function preload() {
  font = loadFont('./NotoSans-Black.ttf')
}

function setup() {
  let c = createCanvas(900, 900)
  
  textFont(font)
  textSize(fontsize)
  textAlign(CENTER, CENTER)

  tileSize = width / tiles

  noLoop()
  
}

function draw() {
  background('#fafafa')
  

  for (var y = tileSize / 2; y < height - tileSize; y = y + tileSize) {
    for (var x = tileSize /2; x < width - tileSize; x = x + tileSize) {

      text(char(random(35,100)), x + tileSize / 2, y + tileSize / 2);
      
    }
  }
  
}

function keyPressed() {
  if (key == " ") {
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  }
}