let number;

//number = Number(prompt("Ingrese el valor númerico de n de la serie Fibonacci"));

do{ // Se obliga a ingresar un valor numerico
    
    number = Number(prompt("Ingrese el valor númerico de n de la serie Fibonacci"));
}while(isNaN(number));

let a,b;
a = 0;
b = 1
for(let i=0;i<number;i++){
    document.write("-"+a);
    let c = a + b;
    a = b;
    b = c;
}
