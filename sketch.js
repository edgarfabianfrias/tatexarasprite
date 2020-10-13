const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BG_COLOR = [222, 55, 100];
let tatexara;
let tatexaraAnim;

function preload() {
  const tatexaraSpritesheet = loadSpriteSheet("img/tatexara.png", 32, 32, 6);
  tatexaraAnim = loadAnimation(tatexaraSpritesheet);
  tatexara = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 32, 32);
  tatexara.moveSpeed = 2;
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  tatexara.addAnimation("move", tatexaraAnim);
  tatexara.addImage("still", loadImage("img/tatexara_still.png"));
  tatexara.setDefaultCollider();
}

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  tatexara.limitSpeed(tatexara.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(tatexara);
}
