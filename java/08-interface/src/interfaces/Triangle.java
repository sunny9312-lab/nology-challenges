package interfaces;

public class Triangle implements Area, Perimeter {
	int height = 100;
	int base = 0;
	int side1 = 30;
	
	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		double triangleArea = height * base / 2;
		return triangleArea;
	}

	@Override
	public double getPerimeter() {
		// TODO Auto-generated method stub
		return 0;
	}

}
