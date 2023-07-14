import java.util.Scanner;
public class Challenge {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
				
		        Scanner scanner = new Scanner(System.in);

		        System.out.print("Enter a number: ");
		        int n = scanner.nextInt();

		        if (n > 0) {
		            System.out.println(n + " is positive");
		        } else if (n < 0) {
		            System.out.println(n + " is negative");
		        } else {
		            System.out.println("You entered zero");
		        }

		        scanner.close();
	}

}
