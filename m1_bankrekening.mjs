function toonSaldo() {
    console.log(`Er staat momenteel €${this.saldo} op de rekening met nummer ${this.rekeningnummer}`);
}

function overschrijving(destination, amount) {
    this.saldo -= amount;
    destination.saldo += amount;
    console.log('Overschrijving gelukt!')
}

let bankrekening ={
    rekeningnummer: "123456",
    saldo: 4242,
    eigenaar: "John",
    toonSaldo: toonSaldo,
    overschrijving: overschrijving
};

let rekening2 = {
    rekeningnummer: "987654",
    saldo: 21,
    eigenaar: "Kirk",
    toonSaldo: toonSaldo,
    overschrijving: overschrijving
};


bankrekening.toonSaldo();
rekening2.toonSaldo();
bankrekening.overschrijving(rekening2, 42);
bankrekening.toonSaldo();
rekening2.toonSaldo();