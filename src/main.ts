import { Application, Texture, AnimatedSprite } from "pixi.js";

function main() {
  const app = new Application({
    antialias: false,
    width: 320,
    height: 240
  });
  const aSprite = new AnimatedSprite([Texture.EMPTY]);
  function onLoad() {
    aSprite.textures = [
      app.loader.resources["assets/a1.png"].texture,
      app.loader.resources["assets/a2.png"].texture
    ];
    aSprite.animationSpeed = 5 / 60;
    aSprite.play();
    app.stage.addChild(aSprite);
    app.ticker.add(update);
  }
  function update() {
    aSprite.x = x;
    aSprite.y = y;
  }
  app.loader
    .add("assets/a1.png")
    .add("assets/a2.png")
    .load(onLoad);
  document.body.append(app.view);
  let x = 0;
  let y = 0;
  globalThis.addEventListener("keydown", event => {
    let preventDefault = true;
    const step = 16;
    switch (event.key) {
      case "ArrowDown": {
        y += step;
        break;
      }
      case "ArrowLeft": {
        x -= step;
        break;
      }
      case "ArrowUp": {
        y -= step;
        break;
      }
      case "ArrowRight": {
        x += step;
        break;
      }
      default: {
        preventDefault = false;
        break;
      }
    }
    if (preventDefault) {
      event.preventDefault();
    }
  });
}

main();
