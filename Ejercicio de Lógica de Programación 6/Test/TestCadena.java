package Test;

import java.util.*;

import Clases.Palabra_Invertida;
public class TestCadena {
	public static void main(String[] args) {
		Scanner read = new Scanner(System.in);
		String cadena = " ";
		System.out.println("Ingrese la palabra a invertir");
		cadena = read.nextLine();
		
		Palabra_Invertida pi = new Palabra_Invertida(cadena);
		System.out.print("Tu palabra invertida es: ");
		System.out.print(pi.reverseString());
		
	}
}
