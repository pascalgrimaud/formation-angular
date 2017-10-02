let fruits = new Set();
fruits.add('pomme')
    .add('poire')
    .add('abricot');
let fruitsIteratorEntries = fruits.entries();

console.log(fruitsIteratorEntries);

// récupérer val suivante d'un setIterator
console.log(fruitsIteratorEntries.next()); // pomme, done à false
console.log(fruitsIteratorEntries.next()); // poire, done à false
console.log(fruitsIteratorEntries.next()); // abricot, done à false
console.log(fruitsIteratorEntries.next()); // undefined, avec done à true

// if (fruitsIteratorEntries.next().done) {
//     console.log('iteration terminée');
// } else {
//     console.log(fruitsIteratorEntries.next());
// }
