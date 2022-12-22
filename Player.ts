import { Input } from "./Input";
import { Match } from "./Match";

export class Player {
  private id: string = "";
  private match: Match = new Match();
  private word: string = "";

  constructor(id: string) {
    this.id = id;
  }

  public async sayAWord() {
    let word = await Input.askInput("Player " + this.id + " say a word: \n");
    word = word.toString();
    if (this.word == null || !(this.word === word)) {
      this.word = word;
    }
    this.match.addWord(word);
  }

  public setMatch(match: Match) {
    if (this.match == null || !(this.match === match)) {
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
