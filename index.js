import Fighter from "./src/Fighter.js";
import Game from "./src/Game.js";
import createWeapon from "./src/createWeapon.js";
import createShield from "./src/createShield.js";

// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const heracles = Fighter("🧔 Heracles", 20, 6);
const nemeanLion = Fighter("🦁 Nemean Lion", 11, 13);

Game(heracles, nemeanLion);

const sword = createWeapon("sword");
const shield = createShield("shield");

heracles.equipWeapon(sword);
heracles.equipShield(shield);

const erymantheBoar = Fighter("🐗 Erymanthe Boar", 40, 20);

Game(heracles, erymantheBoar);
