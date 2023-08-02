import java.util.Random;
import java.util.Scanner;

public class Minesweeper {
    private static final int BOARD_SIZE = 8; // 게임 보드의 크기(8x8)
    private static final int NUM_MINES = 10; // 지뢰의 수를 정의
    private static final char MINE = 'M'; // 지뢰에는 M
    private static final char UNCOVERED_MINE = 'X'; // 발견된  지뢰 X
    private static final char EMPTY_CELL = 'E';

    private char[][] board;  // 게임 보드의 현재상태를 나타내는 문자의 2D 배열
    private boolean[][] isMine;  // 지뢰 위치를 추적하는데 사용되는 부울의 2D 배열

    public Minesweeper() {
    	// 게임판을 초기화 하고 지뢰를 무작위로 배치
        board = new char[BOARD_SIZE][BOARD_SIZE];
        isMine = new boolean[BOARD_SIZE][BOARD_SIZE];
        initializeBoard();
        placeMines();
    }

    public void initializeBoard() {
    	// board배열을 문자로 채워 empty_cell 게임 보드를 초기화
        for (int i = 0; i < BOARD_SIZE; i++) {
            for (int j = 0; j < BOARD_SIZE; j++) {
                board[i][j] = EMPTY_CELL;
            }
        }
    }

    private void placeMines() {
    	// 개체를 사용하여 게임 보드에 무작위로 지뢰를 배치. random배열의 해당셀을 isMine으로 설정'true'
        Random random = new Random();
        int count = 0;
        while (count < NUM_MINES) {
            int row = random.nextInt(BOARD_SIZE);
            int col = random.nextInt(BOARD_SIZE);
            if (!isMine[row][col]) {
                isMine[row][col] = true;
                count++;
            }
        }
    }

    private int countNeighboringMines(int row, int col) {
    	//셀 위치(행, 열)가 주어지면 해당 셀 주변의 이웃 지뢰수를 계산합니다. 중첩된 루프를 사용하여 이웃셀을 반복하고, 'isMine'로 설정합니다'true'
        int count = 0;
        for (int i = row - 1; i <= row + 1; i++) {
            for (int j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && i < BOARD_SIZE && j >= 0 && j < BOARD_SIZE && isMine[i][j]) {
                    count++;
                }
            }
        }
        return count;
    }

    private void uncoverCell(int row, int col) {
    //이메서드는 플레이어가 셀을 발견할때 호출된다,. 먼저 셀이 유효한지(보드 경계내에서), 이미 노출되어있거나 플래그로 표시되어 있는지 확인
    //셀이 이면을 empty_cell이용하여 이웃 지뢰의 수를 계산하고countNeighboringMines()이웃지뢰가 없으면 해당 숫자 또는 빈공간으로 셀을 갱신하고 이웃 지괴가 없는 이웃셀을 재귀적으로 발견
        if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE || board[row][col] != EMPTY_CELL) {
            return;
        }

        int neighboringMines = countNeighboringMines(row, col);
        board[row][col] = (neighboringMines == 0) ? ' ' : (char) ('0' + neighboringMines);

        if (neighboringMines == 0) {
            for (int i = row - 1; i <= row + 1; i++) {
                for (int j = col - 1; j <= col + 1; j++) {
                    uncoverCell(i, j);
                }
            }
        }
    }

    private void printBoard() {
    	//게임 보드의 현재 상태를 콘솔에 인쇄한다.
        System.out.println("Minesweeper Board:");
        System.out.println("  0 1 2 3 4 5 6 7");
        for (int i = 0; i < BOARD_SIZE; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < BOARD_SIZE; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }

    private boolean hasWon() {
    	//empty_cell보드에 s가 더이상 없는지 확인하여 플레이어가 게임에서 이겼는지 확인
        for (int i = 0; i < BOARD_SIZE; i++) {
            for (int j = 0; j < BOARD_SIZE; j++) {
                if (board[i][j] == EMPTY_CELL) {
                    return false;
                }
            }
        }
        return true;
    }

    private void play() {
    	// 플레이어가 게임과 상호작용하는 주요 게임 루프
    	// 셀을 밝히기 위해 행 및 열번호에 대한 사용자 입력이 필요
    	// 지뢰가 발견되면 게임이 종료 되고 플레이어는 패배
    	// 광산이 아닌 모든 셀이 발견되면 플레이어가 승리
    	// 이러한 조건중 하나가 충족될때까지 루프가 계속된다
        Scanner scanner = new Scanner(System.in);

        while (true) {
            printBoard();

            System.out.print("Enter row (0-7): ");
            int row = scanner.nextInt();

            System.out.print("Enter column (0-7): ");
            int col = scanner.nextInt();
                   
            if (isMine[row][col]) {  //해당셀이 지뢰이면
                board[row][col] = UNCOVERED_MINE; 
                printBoard();
                System.out.println("Game Over! You hit a mine!");
                break;
            } else {
                uncoverCell(row, col);
                if (hasWon()) {
                    printBoard();
                    System.out.println("Congratulations! You've cleared all the mines!");
                    break;
                }
            }
        }

        scanner.close();
    }

    public static void main(String[] args) {
    	// 프로그램의 진입점. 클래스의 인스턴스를 만들고 메서드 Minesweeper를 호출하여 게임을 시작
        Minesweeper game = new Minesweeper();
        game.play();
    }
}
