package interfaces;

public class Arrow implements ApplyEffect {

	@Override
	public void apply(Player player) {
		// TODO Auto-generated method stub
		player.setHealth(player.health - 12);
		
	}

}
