package minesweeper;

import minesweeper.Cell;

public class Grid {
	 Cell[][] gameGrid = new Cell[10][10];
	private int cellRevealed = 0;
	private int bombsRevealed = 0;
	private int[][] bombCoordinates = new int[10][2];
	//[[1,2], [2,3]]
	
	public Grid() {
		this.generateMines();
		//create a Cell for each of your empty array spots
		for(int i = 0; i < gameGrid.length; i++) {
			for(int j = 0; j < gameGrid[i].length; j++) {
				gameGrid[i][j] = new Cell();
				//if gameGrid[i][j]
				//if(bombCoordinates.includes([i,j])){
				//
				gameGrid[i][j].setHasBomb(true);
				
			}
		}
	}
	
	public void printGrid() {
		for(int i = 0; i < 10; i++) {
			for(int j = 0; j < 10; j++) {
				System.out.printf("[]");
			}
			System.out.println(" ");
		}
	}
	
	public void generateMines() {
		//Math.random - make sure values are unique
		// generate two numbers, check if they are already in the array
		// if not push to the array
		// if yes, generate new ones
		
		
	}

}
