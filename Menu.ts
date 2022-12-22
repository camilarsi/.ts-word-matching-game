import { GameState } from "./GameState";
import { Match } from "./Match";
import { Quit } from "./Quit";
import { SetMatch } from "./SetMatch";
import { Input } from "./Input";

export class Menu extends GameState {
  constructor() {
    super(new Match());
  }

  public async run(): Promise<GameState | null> {
    const option = await Input.askInput(
      "Welcome! Choose an option: \n  [a]- Start New Game \n  [b]- Quit \n"
    );
    switch (option) {
      case "a":
        return new SetMatch(this.getMatch(), this);
      case "b":
        return new Quit(this.getMatch());
      default:
        return this;
    }
  }
}
