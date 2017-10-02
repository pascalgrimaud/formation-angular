// http://reactivex.io/rxjs/manual/overview.html#choose-an-operators.html

let Observable = Rx.Observable;

// create observable with method of
let values = Observable.of('Hello', 'World', 2017);

// souscription
values.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed!')
);

// l'opérateur of crée un observable qui émet toutes les valeurs
// passées en arguments les unes après les autres et qui termine 
// par emettre une notification pour le complete

// créer un observable à partir d'un tableau avec l'opérateur from

let fruitsArray = ['fraise', 'banane', 'abricot'];
let fruitsObservable = Observable.from(fruitsArray);
fruitsObservable.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed!')
);

// créer un observable avec l'opérator from depuis une promise
// on va utiliser l'api github pour récupérer les emojis
// https://api.github.com/emojis
let url = 'https://api.github.com/emojis';
let emojisObservable = Observable.from($.getJSON(url));
emojisObservable.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed!')
);
