// en ES5
var fruits = ['fraise', 'banane', 'poire', 'pomme'];
console.log('fruits[0]='+fruits[0]);
console.log('fruits[3]='+fruits[3]);

// en ES6
let [strawberry,,,apple] = ['fraise', 'banane', 'poire', 'pomme'];
console.log('strawberry='+strawberry);
console.log('apple='+apple);

// en ES5
var dog = {
    name: 'le chien',
    age: 1,
    color: 'noir'
}
console.log('dog.name='+dog.name);
console.log('dog.age='+dog.age);
console.log('dog.color='+dog.color);

// en ES6
let (name, color) = {
    name: 'le chien',
    age: 1,
    color: 'noir'
}
console.log('name='+name);
console.log('color='+color);