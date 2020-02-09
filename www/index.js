//Import Universe from pkg
import { Universe } from "game-of-life";

//Get pre element
const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

// Get pre text to render in each tick, call requestAnimationFrame with a tick function
const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();
  
    requestAnimationFrame(renderLoop);
  };

  requestAnimationFrame(renderLoop);