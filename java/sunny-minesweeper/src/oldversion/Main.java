package minesweeper;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		//create a new Grid
		Grid grid = new Grid();
		boolean hasWon = false;
		Scanner s = new Scanner(System.in);
		
		 
		while(!hasWon) {
			grid.printGrid();
			System.out.println("Please enter corrd x");
			int x = s.nextInt();
			System.out.println("Please enter corrd y");
			int y = s.nextInt();
			
			if(grid.gameGrid[x][y].isHasBomb() == true) {
				hasWon = true;
				
			}
		}

	}

}
