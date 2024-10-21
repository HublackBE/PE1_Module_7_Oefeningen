let Fhb = {
    naam: 'Fabienhogeschool Brussel',
    student: [
        {naam: 'Luke', leeftijd: 18, vakken: ['PE1', 'PSD1', 'NE1', 'PE2', 'WE1', 'WA1'], cursus: 'TI1'},
        {naam: 'Picard', leeftijd: 20, vakken: ['PSD1', 'NE1', 'PE2', 'WA1'], cursus: 'TI1'},
        {naam: 'John', leeftijd: 19, vakken: ['PE1', 'PSD1', 'IOT1'], cursus: 'IOT1'}
    ],
    cursussen:['TI1', 'IOT1'],
    inschrijven: function(who, leeftijd, cursus) {
        if(this.cursussen.indexOf(cursus) != -1){
            this.student.push({naam: who, leeftijd: leeftijd, vakken: [], cursus: cursus})
            if(cursus === 'TI1'){
                this.student[this.student.length - 1].vakken = ['PE1', 'PSD1', 'NE1', 'PE2', 'WE1', 'WA1'];
            } else if(cursus === 'IOT1'){
                this.student[this.student.length - 1].vakken = ['PE1', 'PSD1', 'IOT1']
            }
        }

    }
}


Fhb.inschrijven('Kevin', 21, 'TI1');

console.log(Fhb.student)