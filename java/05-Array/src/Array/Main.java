package Array;

import java.util.Arrays;

public class Main {


	public static void main(String[] args) {
	  int[] inputArray = {1, 2, 3}; // Example input array
	
	  int[] incrementedArray = incrementArray(inputArray);
	  System.out.println("Incremented array: " + Arrays.toString(incrementedArray));
	}
	
	public static int[] incrementArray(int[] array) {
	  int[] result = new int[array.length];
	
	  for (int i = 0; i < array.length; i++) {
	      result[i] = array[i] + 1;
	  }
	
	  return result;

}
//public static void main(String[] args) {
//int[] inputArray = {1, 2, 3}; // Example input array
//
//int[] incrementedArray = incrementArray(inputArray);
//System.out.println("Incremented array: " + Arrays.toString(incrementedArray));
//}
//
//public static int[] incrementArray(int[] array) {
//int[] result = new int[array.length];
//
//for (int i = 0; i < array.length; i++) {
//  result[i] = array[i] + 1;
//}
//
//return result;
//
//}
	
}
