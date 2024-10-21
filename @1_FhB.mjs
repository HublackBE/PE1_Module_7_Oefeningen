let Fhb = {
    naam: 'Fabienhogeschool Brussel',
    student: [
        {naam: 'Luke', leeftijd: 18, vakken: ['PE1', 'PSD1', 'NE1', 'PE2', 'WE1', 'WA1'], cursus: 'TI1'},
        {naam: 'Picard', leeftijd: 20, vakken: ['PSD1', 'NE1', 'PE2', 'WA1'], cursus: 'TI1'},
        {naam: 'John', leeftijd: 19, vakken: ['PE1', 'PSD1', 'IOT1'], cursus: 'IOT1'}
    ],
    cursussen:[
        {naam: 'TI1', vakken: ['PE1', 'PSD1', 'NE1', 'PE2', 'WE1', 'WA1']},
        {naam: 'IOT1', vakken: ['PE1', 'PSD1', 'IOT1']}
    ],
    inschrijven: function(who, leeftijd, cursus) {
        try{
            this.student.push({naam: who, leeftijd: leeftijd, vakken: this.cursussen.find(x => x.naam === cursus).vakken, cursus: cursus})
        }catch(Error){
            console.error('Ongeldige cursus!')
        }
    }
}


Fhb.inschrijven('Kevin', 21, 'TI1');

console.log(Fhb.student)