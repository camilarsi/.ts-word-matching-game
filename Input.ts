import * as readline from 'readline';
import { stdin, stdout} from 'process';

export class Input{

    public static askInput() {
        let rl = readline.createInterface({
            input : stdin, 
            output : stdout
        });
        return rl;
    }

}
