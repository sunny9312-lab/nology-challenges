package testing;

public class Grade {
	private int points;
	private boolean isPassing;
	private final int THRESHOLD = 50;
	
	Grade(int points){
		this.points = points;
		this.setPassing();
	}
	public void setPassing() {
		this.isPassing = this.points >= 50;
	}
}
