const { Observable } = require("rxjs");

// Defining the function with observable
function getData() {
  const beers = [
    {name: "Stella", country: "Belgium", price: 9.50},
    {name: "Sam Adams", country: "USA", price: 8.50},
    {name: "Bud Light", country: "USA", price: 6.50},
    {name: "Brooklyn Lager", country: "USA", price: 8.00},
    {name: "Sapporo", country: "Japan", price: 7.50}
  ];

// The observer will be provided at the time of subscription
  return new Observable(observer => {
      beers.forEach(beer => observer.next(beer));
      observer.complete();
    }
  );
}

// Calling the function that subscribe to the observable
// The function subscribe() receives the Observer, represented by three functions
getData()
  .subscribe(
    beer  => console.log("Subscriber got " + beer.name),   // handling the arrived data
    error => console.err(error),   // an error arrived
    () => console.log("The stream is over")   // the signal that the stream completed arrived
  );
