// giocatore
// computer
const giocatore = "";
const computer = "";

let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log("Giocatore " + numeroGiocatore); // Output: Un numero tra 1 e 6

let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log("Computer " + numeroComputer); // Output: Un numero tra 1 e 6

if(numeroGiocatore > numeroComputer) {
    console.log("Vince Giocatore");
}
else {
    console.log("Vince Computer");
}