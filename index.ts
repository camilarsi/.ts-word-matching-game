import { GameState } from './GameState';
import { Menu } from './Menu';
function Main() {

	let gs: GameState = new Menu();
		
	while(gs!= null) {
		gs = gs.run();
	}
}

Main();