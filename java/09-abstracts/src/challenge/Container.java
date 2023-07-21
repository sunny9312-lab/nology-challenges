package challenge;
	

abstract class Container {
	double spoonNum;
	
	abstract double getVolume();

	public double teaspoonCount(int spoons) {
		return this.spoonNum;
	}
}
