// lista di email
// chiedere email all'utente
// controllare se email è nella lista
// stampare messaggio dell'esito

let emails = ["a@email.com", "b@email.com", "c@email.com", "d@email.com", "e@email.com"];
// console.table(email);

const utente = prompt("inserisci la tua email");

let found = false;

for (let i = 0; i < emails.length && found === false; i++) {

    if(utente === emails[i]){
        found = true;
    }
}

if(found === false){
    console.log("L'utente non può accedere");
    alert("Non puoi accedere")
}
else{
    console.log("L'utente Può accedere")
    alert("Puoi accedere");

}