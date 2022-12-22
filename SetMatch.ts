import { GameState } from "./GameState";
import { Menu } from "./Menu";
import { Match } from "./Match";
import { Play } from "./Play";
import { Quit } from "./Quit";
import { Player } from "./Player";
import { Input } from "./Input";

export class SetMatch extends GameState {
  private menu: Menu;

  constructor(match: Match, menu: Menu) {
    super(match);
    this.menu = menu;
  }

  public async run(): Promise<GameState> {
    const option = await Input.askInput(
      "Choose an option: \n [a]- Add New Player \n [b]- Play \n [c] -Quit"
    );
    switch (option) {
      case "a":
        let playerName = await Input.askInput("Player Name: \n ");
        let player: Player = new Player(playerName);
        this.getMatch().addPlayer(player);
        return this;
      case "b":
        if (this.getMatch().getPlayersAmount() < 2) {
          process.stdout.write("At least two players are needed.");
          process.exit;
          return this;
        }
        return new Play(this.getMatch());
      case "c":
        return new Quit(this.getMatch());
      default:
        return this.menu;
    }
  }
}
