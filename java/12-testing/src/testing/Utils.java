package testing;

import java.util.ArrayList;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Utils {
	
	public static int add(int a, int b) {
		return a + b;
	}
	
	public static double divide(double a, double b) {
		
		if(b == 0.0) {
			throw new ArithmeticException("Cannot divide by 0");
		}
		
		return a / b;
	}
	
	// a method that takes in an arrayList
	// returns unique values [1, 1, 1, 2, 2, 3] -> [1, 2, 3]
	public static ArrayList<Integer> makeUnique(ArrayList<Integer> ints) {
		
		ArrayList<Integer> uniqueList = ints
				.stream()
				.distinct()
				.collect(Collectors.toCollection(ArrayList::new));
		
		return uniqueList;
	}

}
