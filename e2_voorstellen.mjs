function voorstellen() {
    let outputString = `Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben`;
    if(this.isSpeels){
        outputString += ' speels.';
    }else {
        outputString += ' niet speels.';
    }
    console.log(outputString);
}

let hond1 = {
    naam: 'Roxy',
    leeftijd: 5,
    isSpeels: true,
}

let hond2 = {
    naam: 'Lupo',
    leeftijd: 4,
    isSpeels: false
}

let hond3 = {
    naam: 'Lucky',
    leeftijd: 12,
    isSpeels: true
}

hond1.voorstellen = voorstellen;
hond2.voorstellen = voorstellen;
hond3.voorstellen = voorstellen;

hond1.voorstellen();
hond2.voorstellen();
hond3.voorstellen();