let brands = new Set();

brands
    .add('honda')
    .add('ducati')
    .add('triomph')
    .add('honda')
    .add('kawazaki');

console.log(brands); // il n'affiche qu'une seule fois 'honda'
// attention: c'est case sensitive !

// créer un Set() directement à partir d'un tableau
let brandsArray = ['honda', 'ducati', 'triomph', 'honda', 'kawazaki', 'Honda'];
let brands2 = new Set(brandsArray);
console.log(brands2);

// méthode has pour tester si un set contient une valeur
console.log(brands.has('honda')); // renvoie true
console.log(brands.has('hondA')); // renvoie false

// méthode delete pour supprimer une entrée
console.log(brands.delete('honda')); // supprime et retourne true
console.log(brands.delete('hondA')); // ne supprime rien et retourne false
console.log('final brands after delete=', brands);

// méthode foreach pour lister un Set
brands.forEach(function(val1, val2, val3) {
    console.log(val1); // la clé
    console.log(val2); // la valeur
    console.log(val3); // let Set lui-même
});
