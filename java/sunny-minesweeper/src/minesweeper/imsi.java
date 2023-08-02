
package minesweeper;

public class Grid {
	Cell[][] gameGrid = new Cell[10][10];
	private int cellRevealed = 0;
	private int bombsRevealed = 0;
	private int[][] bombCoordinates = new int[10][2];

	public Grid() {
		this.generateMines();

		for (int i = 0; i < gameGrid.length; i++) {
			for (int j = 0; j < gameGrid[i].length; j++) {
				gameGrid[i][j] = new Cell();
				gameGrid[i][j].setHasBomb(bombCoordinates[i][j] == 1);
			}
		}
	}

	public void printGrid() {
		for (int i = 0; i < gameGrid.length; i++) {
			for (int j = 0; j < gameGrid[i].length; j++) {
				System.out.printf("[%c]", gameGrid[i][j].isRevealed() ? ' ' : 'X');
			}
			System.out.println();
		}
	}

	public void generateMines() {
		// Generate bomb coordinates randomly
		int numRows = bombCoordinates.length;
		int numCols = bombCoordinates[0].length;

		for (int i = 0; i < numRows; i++) {
			for (int j = 0; j < numCols; j++) {
				if (Math.random() < 0.3) { // Adjust the probability to set bombs as desired
					bombCoordinates[i][j] = 1;
				}
			}
		}
	}
}
