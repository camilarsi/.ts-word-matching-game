import { Match } from "./Match";

export abstract class GameState {
  private match: Match;

  constructor(match: Match) {
    this.match = match;
  }

  public getMatch(): Match {
    return this.match;
  }

  public abstract run(): Promise<GameState | null>;
}
