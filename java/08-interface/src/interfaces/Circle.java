package interfaces;

public class Circle implements Area, Perimeter{
	int Radius = 10;
	
	
	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		double circleArea = Math.PI * Radius * Radius;
		return circleArea;
	}

	@Override
	public double getPerimeter() {
		// TODO Auto-generated method stub
		double circlePerimeter = 2 * Math.PI * Radius;
		return circlePerimeter;
	}

}
