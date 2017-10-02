// permet de créer des fonctions qu'on peut mettre en pause
// et faire repartir à l'endroit où on s'est arreté

function* misc() {
    let a = 10;
    let b = 15;
    console.log(a+b);
    yield;
    console.log('atteint la 2e execution')
    yield
    console.log('atteint la 3e execution')
}

// un generator retour un iterator

let miscIterator = misc();
miscIterator.next(); // affiche 25
miscIterator.next(); // affiche atteint la 2e execution
miscIterator.next(); // affiche atteint la 3e execution

function* decollage() {
    yield 'trois';
    yield 'deux';
    yield 'un';
    yield 'GOOOOO!!!';
}
let monIterator = decollage();
let handle = setInterval(() => {
    let instruction = monIterator.next();
    if (instruction.done) {
        clearInterval(handle);
    } else {
        console.log(instruction);
    }
}, 2000);
