import { GameState } from './GameState'; 
import { Match } from './Match'; 

export class Quit extends GameState {

	constructor (match: Match) {
		super(match);
	}
	
	public run(): GameState {
		return null;
	}

}
