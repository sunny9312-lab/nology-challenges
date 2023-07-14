import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		byte age = 18;
		boolean isCitizen = true;
		if (age >= 18) {
			System.out.println("You can vote");			
		} else {
			System.out.println("No voting for you");
		}
		//challenge1,2
		Scanner scan = new Scanner(System.in);

		boolean isRunning = true;
		while (isRunning) {
			System.out.println("Type c to continue, or 'e' or 'x' to exit");
			char command = scan.next().charAt(0);
			switch (command) {
			case 'c':
				System.out.println("Continue running");
				break;
			case 'e':
			case 'E':
			case 'x':
			case 'X':
				System.out.println("Exiting");
				isRunning = false;
				break;
			default:
				System.out.println("Command not recognised");

			}
		}

		scan.close();

		// for loops have the same functionality as js
		for (int i = 0; i <= 10; i += 2) {
			if (i == 2) {
				continue;
			}
			if (i == 8) {
				break;
			}
			System.out.println(i);
		}
		//YSH
		
	}

}
