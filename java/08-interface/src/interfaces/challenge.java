package interfaces;

public class challenge {

}
//ysh
interface Vehicle {
    double getSpeed();
    void decreaseSpeed(double s);
}

class Bike implements Vehicle {
    private double speedKmPerHour;

    public Bike(double initialSpeedKmPerHour) {
        this.speedKmPerHour = initialSpeedKmPerHour;
    }

    public double getSpeed() {
        return speedKmPerHour * 0.621371; // Conversion to miles/h
    }

    public void decreaseSpeed(double s) {
        speedKmPerHour -= s;
    }

    // Setter for speed attribute
    public void setSpeed(double speedKmPerHour) {
        this.speedKmPerHour = speedKmPerHour;
    }
}

class Car implements Vehicle {
    private double speedMetersPerSecond;

    public Car(double initialSpeedMetersPerSecond) {
        this.speedMetersPerSecond = initialSpeedMetersPerSecond;
    }

    public double getSpeed() {
        return speedMetersPerSecond * 2.23694; // Conversion to miles/h
    }

    public void decreaseSpeed(double s) {
        speedMetersPerSecond -= s;
    }

    // Setter for speed attribute
    public void setSpeed(double speedMetersPerSecond) {
        this.speedMetersPerSecond = speedMetersPerSecond;
    }
}

public class Main {
    public static void main(String[] args) {
        // Example usage
        Bike myBike = new Bike(20.0);
        System.out.println("Bike Speed: " + myBike.getSpeed() + " miles/h");
        myBike.decreaseSpeed(5.0);
        System.out.println("New Bike Speed: " + myBike.getSpeed() + " miles/h");

        Car myCar = new Car(10.0);
        System.out.println("Car Speed: " + myCar.getSpeed() + " miles/h");
        myCar.decreaseSpeed(2.0);
        System.out.println("New Car Speed: " + myCar.getSpeed() + " miles/h");

        // Setters example
        myBike.setSpeed(25.0);
        myCar.setSpeed(15.0);
        System.out.println("Bike Speed (after setting): " + myBike.getSpeed() + " miles/h");
        System.out.println("Car Speed (after setting): " + myCar.getSpeed() + " miles/h");
    }
}
