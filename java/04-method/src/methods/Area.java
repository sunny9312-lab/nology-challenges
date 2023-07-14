package methods;

public class Area {

	/**
	 * This is for finding the area of a circle
	 */
//	
	static double findArea(double radius) {
		return Math.PI * Math.pow(radius, 2);
	}
//method overloading아래것은 주석이랑은 또 다른의미.main에서 이 함수 부를때 호버링하면 이 메세지가 보임
	/**
	 * This is for finding the area of a rectangle
	 */
	static double findArea(double length, double width) {
		return length * width;
	}

	static double findArea() {
		return 0.0;
	}

}
