import { GameState } from "./GameState";
import { Match } from "./Match";
import { Quit } from ".Quit";
import { SetMatch } from "./SetMatch";
import * as readline from "readline";
import { rawListeners, stdin, stdout } from "process";

export class Menu extends GameState {
  constructor() {
    super(new Match());
  }

  public run(): GameState {
    let result: GameState;
    let rl = readline.createInterface({
      input: stdin,
      output: stdout,
    });

    rl.question(
      "Welcome! Choose an option: \n  [a]- Start New Game \n  [b]- Quit",
      (answer) => {
        switch (answer.toLowerCase()) {
          case "a":
            result = new SetMatch(this.getMatch(), this);
          case "b":
            result = new Quit(this.getMatch());
          default:
            result = this;
        }
      }
    );
  }
}
