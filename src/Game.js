import log from "./log.js";
import createRound from "./createRound.js";
import chalk from "chalk";

const Game = (character1, character2) => {
  let _winnerState = false;

  const checkIfPlayerIsAlive = (character) => {
    if (character.getLife() <= 0) {
      _winnerState = true;
    }
  };

  while (!_winnerState) {
    createRound(character1, character2);
    checkIfPlayerIsAlive(character2);
    if (!_winnerState) {
      log(chalk.yellow(`${character2.getName()} is still in the game.`));
    } else {
      log(
        chalk.yellow(
          `${character2.getName()} has been defeated. ${character1.getName()} is the winner.`
        )
      );
      break;
    }

    createRound(character2, character1);
    checkIfPlayerIsAlive(character1);
    if (!_winnerState) {
      log(chalk.yellow(`${character1.getName()} is still in the game.`));
    } else {
      log(
        chalk.yellow(
          `${character1.getName()} has been defeated. ${character2.getName()} is the winner.`
        )
      );
      break;
    }
  }
};

export default Game;
