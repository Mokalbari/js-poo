const MAX_LIFE = 100;

const createCharacter = (userName, strength, dexterity) => {
  let life = MAX_LIFE;

  const getName = () => userName;
  const getLife = () => life;
  const setLife = (damage) => {
    life = Math.max(0, life - damage);
  };

  return { getName, getLife, setLife, strength, dexterity };
};

export default createCharacter;
