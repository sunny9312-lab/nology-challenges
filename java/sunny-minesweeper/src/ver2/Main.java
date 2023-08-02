package ver2;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Grid grid = new Grid();
        boolean hasWon = false;
        Scanner scanner = new Scanner(System.in);

        while (!hasWon) {
            grid.printGrid();
            System.out.print("Please enter row (0-9): ");
            int row = scanner.nextInt();

            System.out.print("Please enter column (0-9): ");
            int col = scanner.nextInt();

            hasWon = grid.uncoverCell(row, col);

        }

        scanner.close();
    }
}
