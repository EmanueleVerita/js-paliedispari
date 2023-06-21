// chiedo un numero all'utente

let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));

if((userNumber < 0) || (userNumber > 5)){
    alert('Il numero inserito non rientra nei parametri');
}
else{
    console.log('il numero che hai scelto è' , userNumber , typeof userNumber);
}

// numero inserito dal pc 

let min = 1;
let max = 5;


function getRndInteger(min, max) {
    const pcNumber = Math.floor(Math.random() * (max - min + 1) ) + min;

    return pcNumber;
}

const randomNumber = getRndInteger(min, max);
console.log('il numero del pc è' , randomNumber );


//sommo i numeri 

function somma(userNumber, randomNumber){

    const sum = userNumber + randomNumber;

    return sum;

}

const sommaFinale = somma(userNumber , randomNumber);

console.log( 'somma finale uguale a' , sommaFinale);

//controllo se il risultato è pari o dispari

if((sommaFinale % 2 == 0) && (userNumber % 2 == 0)){

    console.log('Hai vinto!!');

}
else if( (sommaFinale % 2 != 0) && (userNumber % 2 != 0)){

    console.log('Hai vinto!!');

}
else [

    console.log('Hai perso :(');


]

