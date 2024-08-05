const createFightingActions = (strength, dexterity) => {
  let weapon = null;
  let shield = null;

  const equipWeapon = (weaponName) => {
    weapon = weaponName;
  };

  const equipShield = (shieldName) => {
    shield = shieldName;
  };

  const fight = () => {
    const baseDamage = Math.floor(Math.random() * strength);
    console.log(`fighting action : base damage is ${baseDamage}`);
    console.log(
      `fighting action : total damage is ${
        weapon ? baseDamage + weapon.damage : baseDamage
      }`
    );
    return weapon ? baseDamage + weapon.damage : baseDamage;
  };

  const dodge = () => {
    const baseDodge = Math.floor(Math.random() * dexterity);
    console.log(`dodging action : base dodge is ${baseDodge}`);
    console.log(
      `dodging action : total dodge is ${
        shield ? baseDodge + shield.protection : baseDodge
      }`
    );
    return shield ? baseDodge + shield.protection : baseDodge;
  };

  const totalHit = (fightValue, dodgeValue) =>
    fightValue >= dodgeValue ? fightValue - dodgeValue : 0;

  return { fight, dodge, totalHit, equipWeapon, equipShield };
};

export default createFightingActions;
