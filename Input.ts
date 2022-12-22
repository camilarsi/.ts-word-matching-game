import * as readline from "readline";
import { stdin, stdout } from "process";
import { resolve } from "path";

export class Input {
  public static askInput(question: string): Promise<string> {
    process.stdout.write(question);
    return new Promise((resolve) => {
      process.stdin.on("data", (data) => {
        resolve(data.toString().toLowerCase().trim());
        process.exit;
      });
    });
  }
}
