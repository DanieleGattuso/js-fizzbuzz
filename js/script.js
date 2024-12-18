

// stampiamo i valori di i da 0 a 100
for (let i = 0; i <= 100; i++) {
// Diamo un nome alla variabile nello scope chiuso
    let  value;
    // Facciamo in modo che ogni qual volta il numero ottenuto sia un multiplo di 3 e 5 esca fuori la scritta FizzBuzz
    if(i % 3 === 0 && i % 5 === 0){
        value = "FizzBuzz";
         // Facciamo in modo che ogni qual volta il numero ottenuto sia un multiplo di 3  esca fuori la scritta Fizz
    }else if (i % 3 === 0){
        value = "Fizz";
        // Facciamo in modo che ogni qual volta il numero ottenuto sia un multiplo di 5  esca fuori la scritta Buzz
    }else if(i % 5 === 0){
        value = "Buzz";
        // Se nessuna delle 3 condizioni si verifica allora il valore i resta invariato 
    }else{
        value=i
    }

    console.log(value);
    

}

// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

