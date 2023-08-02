
package minesweeper;

import java.util.Random;

public class Grid {
    private static final int BOARD_SIZE = 8;
    private static final int NUM_MINES = 10;

    private Cell[][] gameGrid;

    public Grid() {
        gameGrid = new Cell[BOARD_SIZE][BOARD_SIZE];
        initializeGrid();
        placeMines();
    }

    private void initializeGrid() {
        for (int i = 0; i < BOARD_SIZE; i++) {
            for (int j = 0; j < BOARD_SIZE; j++) {
                gameGrid[i][j] = new Cell();
            }
        }
    }

    private void placeMines() {
        Random random = new Random();
        int count = 0;

        while (count < NUM_MINES) {
            int row = random.nextInt(BOARD_SIZE);
            int col = random.nextInt(BOARD_SIZE);

            if (!gameGrid[row][col].isHasBomb()) {
                gameGrid[row][col].setHasBomb(true);
                count++;
            }
        }
    }

    public void printGrid() {
        System.out.println("Minesweeper Board:");
        System.out.println("  0 1 2 3 4 5 6 7");

        for (int i = 0; i < BOARD_SIZE; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < BOARD_SIZE; j++) {
                char cellChar = gameGrid[i][j].isRevealed() ? ' ' : 'X';
                System.out.print("[" + cellChar + "]");

            }
            System.out.println();
        }
    }

    public boolean uncoverCell(int row, int col) {
        if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE || gameGrid[row][col].isRevealed()) {
            return false;
        }

        gameGrid[row][col].setRevealed(true);

        if (gameGrid[row][col].isHasBomb()) {
            System.out.println("Game Over! You hit a mine!");
            return true;
        }

        // Code to count neighboring bombs and handle uncovering of neighboring cells

        return false;
    }
}

//j-version
//package minesweeper;
//
//import java.util.Random;
//
//public class Grid {
//    private static final int BOARD_SIZE = 8;
//    private static final int NUM_MINES = 10;
//
//    private Cell[][] gameGrid;
//
//    public Grid() {
//        gameGrid = new Cell[BOARD_SIZE][BOARD_SIZE];
//        initializeGrid();
//        placeMines();
//    }
//
//    private void initializeGrid() {
//        for (int i = 0; i < BOARD_SIZE; i++) {
//            for (int j = 0; j < BOARD_SIZE; j++) {
//                gameGrid[i][j] = new Cell();
//            }
//        }
//    }
//
//    private void placeMines() {
//        Random random = new Random();
//        int count = 0;
//
//        while (count < NUM_MINES) {
//            int row = random.nextInt(BOARD_SIZE);
//            int col = random.nextInt(BOARD_SIZE);
//
//            if (!gameGrid[row][col].isHasBomb()) {
//                gameGrid[row][col].setHasBomb(true);
//                count++;
//            }
//        }
//    }
//
//    public void printGrid() {
//        System.out.println("Minesweeper Board:");
//        System.out.println("  0 1 2 3 4 5 6 7");
//
//        for (int i = 0; i < BOARD_SIZE; i++) {
//            System.out.print(i + " ");
//            for (int j = 0; j < BOARD_SIZE; j++) {
//                char cellChar = gameGrid[i][j].isRevealed() ? ' ' : 'X';
//                System.out.print("[" + cellChar + "]");
//            }
//            System.out.println();
//        }
//    }
//
//    public boolean uncoverCell(int row, int col) {
//        if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE || gameGrid[row][col].isRevealed()) {
//            return false;
//        }
//
//        gameGrid[row][col].setRevealed(true);
//
//        if (gameGrid[row][col].isHasBomb()) {
//            System.out.println("Game Over! You hit a mine!");
//            return true;
//        }
//
//        // Code to count neighboring bombs and handle uncovering of neighboring cells
//
//        return false;
//    }
//}


//j-version


//Martyna gave guideline
//package minesweeper;
//
//public class Grid {
//	 Cell[][] gameGrid = new Cell[10][10];
//	private int cellRevealed = 0;
//	private int bombsRevealed = 0;
//	private int[][] bombCoordinates = new int[10][2];
//	//[[1,2], [2,3]]
//	
//	public Grid() {
//		this.generateMines();
//		//create a Cell for each of your empty array spots
//		for(int i = 0; i < gameGrid.length; i++) {
//			for(int j = 0; j < gameGrid[i].length; j++) {
//				gameGrid[i][j] = new Cell();
//				//if gameGrid[i][j]
//				//if(bombCoordinates.includes([i,j])){
//				//
//				gameGrid[i][j].setHasBomb(true);
//				
//			}
//		}
//	}
//	
//	public void printGrid() {
//		for(int i = 0; i < 10; i++) {
//			for(int j = 0; j < 10; j++) {
//				System.out.printf("[]");
//			}
//			System.out.println(" ");
//		}
//	}
//	
//	public void generateMines() {
//		//Math.random - make sure values are unique
//		// generate two numbers, check if they are already in the array
//		// if not push to the array
//		// if yes, generate new ones
//		
//		
//	}
//
//}
