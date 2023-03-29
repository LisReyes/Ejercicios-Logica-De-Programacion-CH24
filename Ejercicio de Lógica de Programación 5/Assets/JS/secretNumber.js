
// Establecemos nuestro rango maximo y minimo de numeros
let randomNumber = Math.floor(Math.random() *100)+1;

//Traemos nombres de las clases donde mandaremos a escribir en html
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let countTry = 1; // Contador de intentos del usuario
let clearButton; // Boton que limpiara la pantalla

function verifyNumber() {
    let numberAd = Number(guessField.value);
    if(!isNaN(numberAd)){
        if(countTry==1){
            guesses.textContent = "Tus intentos: ";
        }
        guesses.textContent += numberAd + ' ';
        if(numberAd === randomNumber){// hacemos una comparacion estricta del numero del usuario con el random 
            lastResult.textContent = "¡¡ERES MUY BUENO,ADIVINASTE!!";
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';//limpiamos
            setFin();
        }else{
            lastResult.textContent = "¡¡Incorrecto intenta otra vez!!";
            lastResult.style.backgroundColor = 'red';
            if(numberAd < randomNumber){// Compramos si el numero es mas peque;o que random
                lowOrHi.textContent = "¡El número es muy bajo!";                
            }else if(numberAd > randomNumber){// Comprobamos si elnumero es mas grande que random
                lowOrHi.textContent = "¡¡El número es muy alto!!";                
            }
        }
    }else{
        lastResult.textContent = 'Error solo se admiten números';
        lastResult.style.backgroundColor = 'red';    
    }
    countTry++;//Aumentamos el contador de intentos
    guessField.value = '';// limpiamos
    guessField.focus; // hacemos el enfoque en el input
}

guessSubmit.addEventListener('click',verifyNumber);

// Funcion que finaliza el juego
function setFin() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    clearButton = document.createElement('button');
    clearButton.textContent = "ADIVINA!";
    document.body.append(clearButton);// Agregamos el boton ya que se borra 
    clearButton.addEventListener('click', reicia);// mandamos a llamar para reiniciar el juego
}

function reinicia(){ // volvemos a escribir lo del inicio
    // nota, refactorizar esta parte de codigo
    countTry = 1;

    const resetParas = document.querySelectorAll('.resultParas p');//vaciamos el div
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    clearButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}