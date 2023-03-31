public class Ejercicio7 {
	String [] week = {"Lunes","Martes","Miercoles","Jueves","Viernes"};
	String day;
	String minutes,hours;
	
	
	public Ejercicio7(String day,String minutes,String hours) {
		this.day = day;
		this.minutes = minutes;
		this.hours = hours;
	}
	// Metodo para validar el dia de la semana
	
	public int validateDay() {
		int index = 0;
		// recorremos el array para posicionarnos en el indice del dia y saber los dias que faltan
		if(Arrays.asList(week).contains(day)) {
			for(int i=0;i<week.length;i++) {
				if(day.equals(week[i])) {
					index = i+1;//debido que iniciamos en 0
				}
			}
		}else {
			System.out.println("No ingresaste un día de la semana laboral");
			return 0;//volvemos a validar el dia
		}		
		
		return index;
	}
	
	// Validamos que el tiempo este dentro del rango
	public int validateHour() {
		if(isNumeric(hours)) {
			int hour = Integer.parseInt(hours);
			
			// Validamos el rango 0-24 horas
			if(hour >=0 && hour<=24) {
				return hour;
			}else {
				System.out.println("Error ingrese un numero dentro del rango 0-24");
				return validateHour();// recursivo
			}
		}else {
			System.out.println("Error ingrese datos numericos");
			return validateHour();
		}				
	}
	
	// Validamos los numeros dentro del rango 0-60
	public int validateMinutes() {
		if(isNumeric(minutes)) {
			int minute = Integer.parseInt(minutes);
			
			// Validamos el rango 0-24 horas
			if(minute >=0 && minute<=60) {
				return minute;
			}else {
				System.out.println("Error ingrese un numero dentro del rango 0-24");
				return validateMinutes();// recursivo
			}
		}else {
			System.out.println("Error ingrese datos numericos");
			return validateMinutes();
		}	
	}
	
	// De uso para validar los numeros ingresados 
	private static boolean isNumeric(String cadena){
		try {
			Integer.parseInt(cadena);
			return true;
		} catch (NumberFormatException nfe){
			return false;
		}
	}
}