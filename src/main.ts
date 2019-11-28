import { Application, Sprite, Spritesheet, AnimatedSprite } from "pixi.js";

import aURL from "../assets/a.png";
import aJSON from "../assets/a.json";

function main() {
  const app = new Application({
    antialias: false,
    width: 320,
    height: 240
  });
  function onLoad() {
    const aSheet = new Spritesheet(
      app.loader.resources[aURL].texture.baseTexture,
      aJSON
    );
    aSheet.parse(() => {
      const aSprite = new AnimatedSprite([
        aSheet.textures["a.0"],
        aSheet.textures["a.1"]
      ]);
      aSprite.animationSpeed = 5 / 60;
      aSprite.play();
      app.stage.addChild(aSprite);
      function update() {
        aSprite.x = x;
        aSprite.y = y;
      }
      app.ticker.add(update);
    });
  }
  app.loader.add(aURL);
  app.loader.load(onLoad);
  document.body.append(app.view);
  let x = 0;
  let y = 0;
  document.body.addEventListener("keydown", event => {
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
