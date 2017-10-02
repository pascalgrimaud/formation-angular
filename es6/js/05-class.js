// en ES5
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

var myCar = new Car('BMW','red');
console.log(myCar);

Car.prototype.klaxone = function() {
    console.log(this.brand + ':tuuuuut');
}

myCar.klaxone();
console.log('---------------------------------------');

// en ES6
class Vehicule {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    klaxone() {
        console.log(this.brand + ': tuuuuut');
    }
}

let myVehicule = new Vehicule('Mercedes', 'black');
console.log(myVehicule);
myVehicule.klaxone();
console.log('---------------------------------------');

class VoitureDeCourse extends Vehicule {
    constructor(brand, color, vitesse) {
        super(brand, color);
        this.vitesse = vitesse;
    }

    turbo() {
        console.log('mise en route du turbo');
    }

    klaxone() {
        console.log(this.brand + ': tatt');
    }
}
let myFerrari = new VoitureDeCourse('Ferrari','rouge',250);
console.log(myFerrari);
myFerrari.turbo();
myFerrari.klaxone();
