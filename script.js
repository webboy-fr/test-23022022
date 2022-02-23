let prenom = 'julien'


function affichePrenom(prenom) {
    console.log(prenom)
}




console.log(typeof prenom)
console.log(prenom)


class Car {
    color = ''
    brand = ''
    km = 0

    constructor(c, m) {
        this.color = c
        this.brand = m
    }


    forward() {
        console.log('voiture : avance !')
        this.km++;
    }
    backward() {
        console.log('voiture : recule !')
        this.km--;
    }
}


let voiture1 = new Car('red', 'renault');


let voiture2 = new Car('yellow', 'peugeot');





voiture1.forward();
voiture1.forward();
voiture1.forward();
voiture1.forward();
voiture1.forward();

voiture2.forward();
voiture2.forward();


console.log(voiture1)
console.log(voiture2)
