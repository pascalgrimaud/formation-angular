// en ES5

var fruits = ['banane', 'pomme'];
var vegetables = ['poireaux', 'carottes'];

var food = [fruits, vegetables];
// on obtient un tableau à 2 dimensions

// pour obtenir un tableau à 1 dimension à partir de 2 tableaux
// les 3 petits points permettent de décomposer le tableau en String
var food2 = [...fruits, ...vegetables];

console.log(food);
console.log(food2);

// combiner avec d'autres string
var food3 = [...fruits, ...vegetables, 'navets'];
console.log(food3);

// utiliser les spreads operator dans une fonction

// en ES5
var mixer = function(ing1, ing2) {
    console.log(ing1 + ' avec ' + ing2);
}
mixer('pomme', 'poireaux');

// en ES6
let mixer2 = (ing1, ing2) => console.log(ing1 + ' avec ' + ing2);
mixer2('pomme', 'carottes');

// avec un spread operator
let ingredients = ['carotte', 'fraise'];
mixer2(...ingredients);

let mixer3 = (...args) => console.log(args.join('-'));
mixer3('pomme','peche','abricot');