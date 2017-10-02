let Observable = Rx.Observable;

// create observable
let values = Observable.create((observer) => {
    try {
        observer.next("Hello"); // équivalent à un push de données
        observer.next("World");
        observer.complete();
    } catch(e) {
        observer.error(e);
    }
});

values.subscribe(
    // récupère les données
    (data) => console.log(data),
    // 2e handler pour récupérer les erreur
    (error) => console.log(error),

    () => console.log('completed')
);
