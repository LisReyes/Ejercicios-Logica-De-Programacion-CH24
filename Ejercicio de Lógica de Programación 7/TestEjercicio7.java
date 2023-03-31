
import java.util.*;
public class TestEjercicio7 {
    public static void main(String[] args) {
		Scanner read = new Scanner(System.in);
		String day,hour,minute;
	
		System.out.print(" Ingrese el dia: ");
		day = read.nextLine();
		System.out.print("Ingrese la hora: ");
		hour = read.nextLine();
		System.out.print("Ingrese los minutos: ");
		minute = read.nextLine();
		
		Ejercicio7 e7 = new Ejercicio7(day,hour,minute);
		
		e7.validateDay();
	}
	
}
