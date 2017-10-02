// http://reactivex.io/rxjs/manual/overview.html#choose-an-operators.html

let Observable = Rx.Observable;

let interval = Observable.interval(100) // observable qui emet toutes les 500ms
    .map(x => x + 1)
    .take(10); // operator qui arrete l'emission apres 10 itérations

interval.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed!')
);

// Map() se comporte comme en js !
var numbers = [0,1,2,3,4];
console.log(numbers.map(x => x *10));

let myString = "Aujourd'hui, on voit les Observables avec RxJs";
let timer = Observable.timer(3000, 100) // délai, puis interval
    .do(x => console.log('avant map', x))
    .map(x => myString[x])
    .do(x => console.log('apres map', x))
    .take(myString.length);

let container = document.querySelector('#container');
timer.subscribe(
    (value) => container.innerHTML += value,
    (error) => console.log(error),
    () => console.log('completed')
);
