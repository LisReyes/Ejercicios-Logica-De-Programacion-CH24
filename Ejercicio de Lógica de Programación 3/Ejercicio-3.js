var number,i;

number = Number(prompt("Ingrese un número"));


if(!isNaN(number)){
    if(number<0){
        document.write("ERROR! El factorial funciona solo para numeros positivos");
    }else if(number==1){
        document.write(number);
    }else{
        let factorial = 1;
        for(let i = number; i>0; i--){
                factorial *= i;
        }
        document.write(factorial);
    }    
}else{
    alert("Error! Ingresa solo valores numericos ");    
}

