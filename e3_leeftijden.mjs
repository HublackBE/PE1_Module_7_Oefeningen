let persoon1 = {
    naam: "John",
    leeftijd: 21
};

let persoon2 = {
    naam: "Kirk",
    leeftijd: 42
};

function vergelijkLeeftijd() {
    if(persoon1.leeftijd > persoon2.leeftijd) {
        console.log(`${persoon1.naam} is ouder dan ${persoon2.naam}`);
    } else {
        console.log(`${persoon2.naam} is ouder dan ${persoon1.naam}`)
    }
}

vergelijkLeeftijd();