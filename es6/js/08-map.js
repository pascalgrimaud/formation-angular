let books = new Map();

books.set('Umberto Eco', 'Le nom de la rose');
books.set('Michel Tournier', 'Le roi des Aulnes');
console.log(books);
// propriété size pour récupérer la taille d'une Map()
console.log(books.size);

// méthode get pour lire la valeur d'un Map en lui passant une clé
console.log(books.get('Umberto Eco'));

books.forEach(function(cle, val, map) {
    console.log(cle);
    console.log(val);
    console.log(map);
});

console.log(books.keys());
console.log(books.values());
console.log(books.entries());