package minesweeper;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Grid grid = new Grid();
        boolean hasWon = false;
        Scanner scanner = new Scanner(System.in);

        while (!hasWon) {
            grid.printGrid();
            System.out.print("Please enter row (0-7): ");
            int row = scanner.nextInt();

            System.out.print("Please enter column (0-7): ");
            int col = scanner.nextInt();

            hasWon = grid.uncoverCell(row, col);

            if (hasWon) {
                System.out.println("Congratulations! You've cleared all the mines!");
            }
        }

        scanner.close();
    }
}





//package minesweeper;
//
//import java.util.Scanner;
//
//public class Main {
//
//	public static void main(String[] args) {
//		//create a new Grid
//		Grid grid = new Grid();
//		boolean hasWon = false;
//		Scanner s = new Scanner(System.in);
//		
//		 
//		while(!hasWon) {
//			grid.printGrid();
//			System.out.print("Please enter corrd x: ");
//			int x = s.nextInt();
//			
//			System.out.print("Please enter corrd y: ");
//			int y = s.nextInt();
//			
//			
//			System.out.printf("x: ", x);
//			
//			if(grid.gameGrid[x][y].isHasBomb() == true) {
//				System.out.println("here1");
//				System.out.printf("x: ", x);
//				hasWon = true;
//				
//			}
//			System.out.println("here2");
//		}
//		s.close();
//	}
//	
//}


