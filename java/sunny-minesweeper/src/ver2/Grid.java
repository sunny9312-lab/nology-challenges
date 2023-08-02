package ver2;

import java.util.Random;

public class Grid {
    private static final int GRID_SIZE = 10;
    private static final int NUM_MINES = 10;

    private Cell[][] gameGrid;

    public Grid() {
        gameGrid = new Cell[GRID_SIZE][GRID_SIZE];
        initializeGrid();
        placeMines();
    }

    private void initializeGrid() {
        for (int i = 0; i < GRID_SIZE; i++) {
            for (int j = 0; j < GRID_SIZE; j++) {
                gameGrid[i][j] = new Cell();
            }
        }
    }

    private void placeMines() {
        Random random = new Random();
        int count = 0;

        while (count < NUM_MINES) {
            int row = random.nextInt(GRID_SIZE);
            int col = random.nextInt(GRID_SIZE);

            if (!gameGrid[row][col].hasMine()) {
                gameGrid[row][col].setHasMine(true);
                count++;
            }
        }
    }

    public void printGrid() {
        System.out.println("Minesweeper Board:");
        System.out.println("   0   1   2   3   4   5   6   7   8   9");

        for (int i = 0; i < GRID_SIZE; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < GRID_SIZE; j++) {
                if (gameGrid[i][j].isRevealed()) {
                    if (gameGrid[i][j].hasMine()) {
                        System.out.print("[*] ");
                    } else {
                        System.out.print("[" + gameGrid[i][j].getSurroundingMines() + "] ");
                    }
                } else {
                    System.out.print("[ ] ");
                }
            }
            System.out.println();
        }
    }

    public boolean uncoverCell(int row, int col) {
        if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE || gameGrid[row][col].isRevealed()) {
            return false;
        }

        gameGrid[row][col].setRevealed(true);

        if (gameGrid[row][col].hasMine()) {
            System.out.println("Boom! It's a mine!");
            return true;
        }

        
        int count = countNeighboringMines(row, col);

        if (count == 0) {
            for (int i = row - 1; i <= row + 1; i++) {
                for (int j = col - 1; j <= col + 1; j++) {
                    if (i >= 0 && i < GRID_SIZE && j >= 0 && j < GRID_SIZE) {
                        uncoverCell(i, j);
                    }
                }
            }
        }

        return checkWin();
    }

    private int countNeighboringMines(int row, int col) {
        int count = 0;

        for (int i = row - 1; i <= row + 1; i++) {
            for (int j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && i < GRID_SIZE && j >= 0 && j < GRID_SIZE && gameGrid[i][j].hasMine()) {
                    count++;
                }
            }
        }

        gameGrid[row][col].setSurroundingMines(count);
        return count;
    }

    private boolean checkWin() {
        for (int i = 0; i < GRID_SIZE; i++) {
            for (int j = 0; j < GRID_SIZE; j++) {
                if (!gameGrid[i][j].isRevealed() && !gameGrid[i][j].hasMine()) {
                    return false;
                }
            }
        }
        return true;
    }
}
