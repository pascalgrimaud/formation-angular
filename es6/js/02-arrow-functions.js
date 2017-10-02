// en ES5
var greeting = function() {
    console.log('salut');
}

greeting();

// en ES6
let arrowf = () => {
    console.log('salut');
}

let arrowf2 = () => console.log('salut');

arrowf();

// function with args ES5
var fparam = function(arg1) {
    console.log('salut' + arg1);
}

// function with args ES6
let fparam2 = (arg1) => console.log('salut' + arg1);

// function with object ES5
var dog = {
    name: 'le chien',
    toys: ["ballon", "balle"],
    
    getToys: function() {
        var self = this;
        this.toys.forEach(function (toy) {
            var sentence = this.name + "joue avec 1 " + toy;
            console.log('(ES5) sentence = ' + sentence);
        });
    }
}

// en ES6
let dog2 = {
    name: 'le chien',
    toys: ["ballon", "balle"],
    
    getToys: function() {
        this.toys.forEach( (toy) => {
            let sentence = this.name + "joue avec 1 " + toy;
            console.log('(ES6) sentence = ' + sentence);
        });
    }
}
dog2.getToys();
