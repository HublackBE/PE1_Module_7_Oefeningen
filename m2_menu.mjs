let restaurant = {
    naam: "Le vrai goût",
    keuken: "Michelin",
    menu: [
        {naam: "Steak", prijs: 16},
        {naam: "Canard", prijs: 20},
        {naam: "Salade", prijs: 12}
    ],
    toevoegenAanMenu: function(naam, prijs) {
        this.menu.push({naam: naam, prijs: parseFloat(prijs)});
    }
}

console.log(restaurant.menu);

restaurant.toevoegenAanMenu("Foo", 42);

console.log(restaurant.menu);