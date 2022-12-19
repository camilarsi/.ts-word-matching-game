import { GameState} from './GameState';
import { Menu } from './Menu';
import { Match } from './Match';
import { Play } from './Play';
import { Quit } from './Quit';

export class SetMatch extends GameState {

	private menu: Menu;
	
	constructor(match: Match, menu: Menu) {
		super(match);
		this.menu = menu;
	}
	
	public run(): GameState {
		console.log("Choose an option: \n [a]- Add New Player \n [b]- Play \n [c] -Quit");
		let option: string = Input.askInput();
		switch (option) {
			case "a":
				console.log("Player Name: \n");
				let playerName: string = Input.askInput();
				let p: Player = new Player(playerName);
				this.getMatch().addPlayer(p);
				return this;
			case "b":
				if (this.getMatch().getPlayersAmount()<2) {
					console.log("At least two players are needed. Please, add a new player:\n");
					console.log("Player Name: \n");
					let SecondPlayerName: string = Input.askInput();
					let sp: Player = new Player(SecondPlayerName);
					this.getMatch().addPlayer(sp);
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
