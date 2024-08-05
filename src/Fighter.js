import createCharacter from "./createCharacter.js";
import createFightingActions from "./createFightingActions.js";
import createWeapon from "./createWeapon.js";

const createFighter = (userName, strength, dexterity) => {
  const character = createCharacter(userName, strength, dexterity);
  const actions = createFightingActions(strength, dexterity);

  return {
    ...character,
    ...actions,
  };
};

export default createFighter;
