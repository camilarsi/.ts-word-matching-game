import { GameState } from "./GameState";
import { Match } from "./Match";
import { Menu } from "./Menu";

export class Play extends GameState {
  constructor(match: Match) {
    super(match);
  }

  public run(): Promise<GameState | null> {
    return this.play();
  }

  public async play(): Promise<GameState> {
    await this.getMatch().playRound();
    // end of current match
    return new Menu();
  }
}
