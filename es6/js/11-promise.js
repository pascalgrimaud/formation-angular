console.log('je vais à une formation Angular');

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let message = 'bravo vous êtes reçu';
        resolve(message);
        reject('Désolé viré');
    }, 5000);
});

console.log('je sors de cette formation');

myPromise.then((data) => {
    console.log(data);
})

console.log('plein de formation');