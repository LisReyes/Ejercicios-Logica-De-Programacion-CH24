var kelvin = 273.15;
var fahrenheit,celcius;

celcius = Number(prompt("Ingrese la temperatura en Celcius"));

if(!isNaN(celcius)){
    kelvin += celcius;
    fahrenheit = (celcius*(9/5) + 32);
    console.log(`Los ${celcius}°C a Kelvin es ${kelvin}°K y Fahrenheit ${fahrenheit}°F `); 
}else{
    console.log("Error! Solo se admiten números ");
}
