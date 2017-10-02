let Observable = Rx.Observable;

// create observable
let values = Observable.create((observer) => {
    observer.next("Hello"); // équivalent à un push de données
    observer.next("World");
    setTimeout(() => console.log('yello les zamis !'), 5000);
});

values.subscribe((data) => console.log(data)); // équivalent à un pull

// la différence avec un générator ES6, c'est que le générator
// renvoie un itérator sur lequel la méthode next() récupère (pull)
// des données, alors que next() sur un observer push des données
