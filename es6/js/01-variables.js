var test = 'bonjour';
console.log(test);

if (true) {
    var test2 = 'les zamis';
    let test3 = 'yello !';
}

function toto() {
    // considère la déclaration ici
    if (true) {
        // cette var uniquement dispo dans la function
        var mavar = 'toto';
    }
}

console.log(test2); // va être affiché correctement
console.log(test3); // ne va pas être affiché

const MAN_MOON = 1968;

MAN_MOON = 1969; // big error
