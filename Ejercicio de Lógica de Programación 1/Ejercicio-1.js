
var num1,num2,num3;

num1 = Number(prompt(" Ingrese el valor del primer numero: ", " "));
num2 = Number(prompt(" Ingrese el valor del segundo numero", " "));
num3 = Number(prompt(" Ingrese el valor del tercer numero: ", " "));

if(num1>=num2 && num2>=num3){
    document.write("El orden ascendente de los numeros es ",num3,num2,num1);
}else if(num2 >= num1 && num1>=num3){
    document.write(" El orden de los numeros es ",num3,num1,num2);
}
if(num1>=num2 && num2>=num3){
    document.write(" \n El orden descendente de los numero es ",num1,num2,num3);
}else if(num2 >= num1 && num1>=num3){
    document.write(" El orden de los numeros es ",num2,num1,num3);
}

