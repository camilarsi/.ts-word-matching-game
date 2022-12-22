import { GameState } from "./GameState";
import { Menu } from "./Menu";
async function Main() {
  let gs: any = new Menu();

  while (gs != null) {
    gs = await gs.run();
  }
}

Main();
