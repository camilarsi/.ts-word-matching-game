import { GameState } from "./GameState";
import { Match } from "./Match";
import { Menu } from "./Menu";

export class Play extends GameState {
  constructor(match: Match) {
    super(match);
  }

  public run(): GameState {
    return this.play();
  }

  public play(): GameState {
    this.getMatch().playRound();
    // end of current match
    return new Menu();
  }
}
