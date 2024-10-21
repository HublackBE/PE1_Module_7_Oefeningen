import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface(input, output);


let autoGarage = {
    naam: 'Seb\'s garage',
    autos: [
        {merk: 'Toyota', bouwjaar: 1989},
        {merk: 'Ferrari', bouwjaar: 1999},
        {merk: 'Mercedes', bouwjaar: 2012}
    ],
    vervangAuto: async function() {
        for(let i = 0; i < this.autos.length; i++){
            console.log(`${i} | merk: ${this.autos[i].merk} | bouwjaar: ${this.autos[i].bouwjaar}`);
        };
        let auto = parseFloat(await userInput.question('Auto: '));
        let nieuweMerk = await userInput.question('Merk: ');
        let nieuweBouwjaar = parseFloat(await userInput.question('Bouwjaar: '));
        this.autos[auto] = {merk: nieuweMerk, bouwjaar: nieuweBouwjaar};
    }
}

await autoGarage.vervangAuto();

console.log(autoGarage.autos)


process.exit();