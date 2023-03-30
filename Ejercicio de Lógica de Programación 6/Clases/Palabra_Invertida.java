package Clases;

public class Palabra_Invertida {
	String phrase;
	
	public Palabra_Invertida(String phrase) {
		this.phrase = phrase;
	}
	
	public String reverseString() {
		String newphase = " ";
		if(!phrase.isEmpty()) {
			for(int i=phrase.length()-1; i>=0 ; i--) {
				newphase += phrase.charAt(i);
			}
		}else {
			System.out.println("No ha introducido una cadena de texto.");
		}
		return newphase;
	}
	
}
