package minesweeper;

public class Cell {
	private String coordX;
	private String coordY;
	private boolean hasBomb = false;
	private boolean isRevealed = false;
	private int surroundingBombs = 0;
	
	
	public String getCoordX() {
		return coordX;
	}
	public void setCoordX(String coordX) {
		this.coordX = coordX;
	}
	public String getCoordY() {
		return coordY;
	}
	public void setCoordY(String coordY) {
		this.coordY = coordY;
	}
	public boolean isHasBomb() {
		return hasBomb;
	}
	public void setHasBomb(boolean hasBomb) {
		this.hasBomb = hasBomb;
	}
	public boolean isRevealed() {
		return isRevealed;
	}
	public void setRevealed(boolean isRevealed) {
		this.isRevealed = isRevealed;
	}
	public int getSurroundingBombs() {
		return surroundingBombs;
	}
	public void setSurroundingBombs(int surroundingBombs) {
		this.surroundingBombs = surroundingBombs;
	}
	
	public int countSurroundingBombs(int[][] grid) {
		//check all 8 squares
//		if(grid[coordX][coordY - 1].getHasBomb() == true) {
//			this.setSurroundingBombs(this.getSurroundingBombs + 1);
//		}
		return 1;
	}
}
