import { Match } from "./Match";

export class Player {
  private id: string;
  private match: Match;
  private word: string;

  constructor(id: string) {
    this.id = id;
  }

  public sayAWord() {
    console.log("Player " + this.id + " say a word: \n");
    input: String = Input.askInput();
    if (this.word == null || !this.word === input) {
      this.word = input;
    }
    this.match.addWord(input);
  }

  public setMatch(match: Match) {
    if (this.match == null) {
      this.match = match;
    }
  }

  public equals(o: Object): boolean {
    try {
      let other = o as Player;
      if (this.id === other.getId()) {
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  }

  public getId(): string {
    return this.id;
  }

  public toString(): string {
    return "\t" + this.id + "\n";
  }
}
