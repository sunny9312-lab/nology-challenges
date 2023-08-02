package test;

import java.awt.List;
import java.util.ArrayList;
import java.util.stream.Stream;

import streams.MathHelper;

public class Main {

	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//		System.out.println(power(3,5));
//		System.out.println(power(2,7));
//		System.out.println(power(1,4));
//
	}

	final Integer secretCode = new Integer(123);
	ArrayList<Integer> previousAttempts = new ArrayList();
	
	public Boolean verifyCode(int attempt) {
		Integer currentAttempt = new Integer(attempt);
		previousAttempts.add(currentAttempt);
		if (currentAttempt == secretCode) return true;
		return false;
	}
	
	
}