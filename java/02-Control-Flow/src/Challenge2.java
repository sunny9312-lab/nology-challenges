import java.util.Scanner;
public class Challenge2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			
		        Scanner scanner = new Scanner(System.in);

		        System.out.print("Enter the first number: ");
		        int num1 = scanner.nextInt();

		        System.out.print("Enter the second number: ");
		        int num2 = scanner.nextInt();

		        System.out.print("Enter the third number: ");
		        int num3 = scanner.nextInt();

		        int largest = num1;

		        if (num2 > largest) {
		            largest = num2;
		        }

		        if (num3 > largest) {
		            largest = num3;
		        }

		        System.out.println(largest + " is the largest.");

		        scanner.close();
		
	}

}
