package methods;

public class Main {

	public static void main(String[] args) {
		int sum = Maths.add(5, 5);
		System.out.println("The sum is " + sum);
		try {
			int result = Maths.divide(10, 0);
			System.out.println(result);
		} catch (ArithmeticException e) {
			System.out.println("Don't divide by zero");

		} catch (Exception e) {
			System.out.println("Something else went wrong");
		}

		System.out.println("My program can keep running");
		
		Animal fluffy = new Animal("cat", "fluffy", "meow");
		Animal fido = new Animal("Dog", "fido", "Woof");
		fluffy.printDetails();
		fido.printDetails();
		fluffy.makeSound();
		fido.makeSound();
		System.out.println(Maths.findArea(3));
		Person me = new Person("Alex","Patrick", "Baulderstone");
		System.out.println(me.fullName());
		System.out.println(Area.findArea(13.0));
		System.out.println(Area.findArea(5.0, 4.0));
		System.out.println(dateFormatter(3600));
		System.out.println(dateFormatter(2, 20, 15));
	}
	public static String dateFormatter(long seconds) {
		long hours = seconds / 3600;
		long minutes = (seconds - (hours * 3600)) / 60;
		long remainingSeconds = seconds - (hours * 3600) - (minutes * 60);
		return String.format("%02dh%02dm%02ds", hours, minutes, remainingSeconds);
	}

	public static String dateFormatter(long minutes, long seconds) {
		long totalSeconds = (minutes * 60) + minutes;
		return dateFormatter(totalSeconds);
	}
	
	public static String dateFormatter(long hours, long minutes, long seconds) {
		long totalMinutes = (hours * 60) + minutes;
		return dateFormatter(totalMinutes, seconds);
	}

	
	
}

//ysh
//package methods;
//
//public class Main {
//
//	public static void main(String[] args) {
//		int sum = Maths.add(5, 5);
//		System.out.println("The sum is " + sum);
//		try {
//			int result = Maths.divide(10, 0);
//			System.out.println(result);
//		} catch (ArithmeticException e) {
//			System.out.println("Don't divide by zero");
//
//		} catch (Exception e) {
//			System.out.println("Something else went wrong");
//		}
//
//		System.out.println("My program can keep running");
//		Animal fluffy = new Animal("Cat", "Fluffy", "Meow");
//		Animal fido = new Animal("Dog", "Fido", "Woof");
//		fluffy.printDetails();
//		fido.printDetails();
//		fluffy.makeSound();
//		fido.makeSound();
//		Person me = new Person("Alex", "Patrick", "Baulderstone");
//		System.out.println(me.fullName());
//		System.out.println(Area.findArea(14.0));
//		System.out.println(Area.findArea(5.0, 4.0));
//		
//		System.out.println(DateFormatter(20000));  
//		//ysh
//		 	        
//	}
//	public static String DateFormatter(long seconds) {
//		long hours = seconds / 3600;
//	    long minutes = (seconds % 3600) / 60;
//	    long remainingSeconds = seconds % 60;
//
//	    String formattedTime = String.format("%02dh%02dm%02ds", hours, minutes, remainingSeconds);
//	    return formattedTime;
//	}
//
//	
//
//}

//ysh