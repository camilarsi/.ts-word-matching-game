import { Player } from "./Player";

export class Match {
  private players: Array<Player>;
  private words: Array<string>;
  private round: number;
  private maxRounds: number;
  private winnerWord: string;
  private static defaultMaxRounds: number = 10;

  public constructor(maxRounds?: number) {
    this.players = new Array();
    this.words = new Array();
    this.round = 1;
    if (maxRounds !== undefined) {
      this.maxRounds = maxRounds;
    } else {
      this.maxRounds = Match.defaultMaxRounds;
    }
  }

  public addPlayer(player: Player) {
    if (!this.players.includes(player)) {
      this.players.push(player);
      player.setMatch(this);
    }
  }

  public addWord(word: string) {
    if (this.words.length < this.players.length) {
      this.words.push(word);
    }
  }

  public getMaxRounds(): number {
    return this.maxRounds;
  }

  public setMaxRounds(maxRounds: number) {
    this.maxRounds = maxRounds;
  }

  public toString(): string {
    let result: string = "Players:\n";
    for (let i = 0; i < this.players.length; i++) {
      result += this.players[i].toString();
    }
    result += "Round: " + this.round + "\n" + "State: ";
    return result;
  }

  public askWordToPlayers() {
    if (this.players.length >= 2) {
      for (let i = 0; i < this.players.length; i++) {
        this.players[i].sayAWord();
      }
    }
  }

  public playRound() {
    if (this.round <= this.maxRounds) {
      this.askWordToPlayers();
      if (!this.checkMatching()) {
        console.log(this.showRoundWords());
        this.words.length = 0;
        this.round++;
        this.playRound();
      } else {
        console.log("You Win! The Winner Words is " + this.winnerWord);
      }
    } else {
      console.log("Nobody win :(");
    }
  }

  public checkMatching(): boolean {
    let result: boolean = false;
    for (let i = 0; i < this.words.length; i++) {
      let w1: string = this.words[i];
      for (let j = i + 1; j < this.words.length; j++) {
        let w2: string = this.words[j];
        if (w1 === w2) {
          result = true;
          this.winnerWord = w1;
        }
      }
    }
    return result;
  }

  public showRoundWords(): string {
    let result: string = "This Round Words Were: \n";
    for (let i = 0; i < this.words.length; i++) {
      result += "- " + this.words[i] + " -";
    }
    return result;
  }
  public getPlayersAmount(): number {
    return this.players.length;
  }
}
