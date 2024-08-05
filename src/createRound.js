import chalk from "chalk";
import log from "./log.js";

const createRound = (character1, character2) => {
  log(
    chalk.green(
      `${character1.getName()} is up. ${character2.getName()} has ${character2.getLife()} hit points.`
    )
  );

  const hit = character1.totalHit(character1.fight(), character2.dodge());
  character2.setLife(hit);

  log(chalk.red(`${character1.getName()} hits for a total of ${hit}.`));

  log(
    chalk.cyan(
      `${character2.getName()} has a remaining ${character2.getLife()} hit points.`
    )
  );
};

export default createRound;
