package challenge;

//Vehicle interface
interface Vehicle {
 double getSpeed();  // Returns the speed in miles/h
 void decreaseSpeed(double s);  // Decreases speed by s miles/h
}

//Bike class
class Bike implements Vehicle {
 private double speed;  // Speed stored in km/h

 public Bike(double speed) {
     this.speed = speed;
 }

 public double getSpeed() {
     return speed * 0.621371;  // Convert km/h to miles/h
 }

 public void decreaseSpeed(double s) {
     speed -= s * 0.621371;  // Convert miles/h to km/h and decrease speed
 }

 public void setSpeed(double speed) {
     this.speed = speed;
 }
}

//Car class
class Car implements Vehicle {
 private double speed;  // Speed stored in m/s

 public Car(double speed) {
     this.speed = speed;
 }

 public double getSpeed() {
     return speed * 2.23694;  // Convert m/s to miles/h
 }

 public void decreaseSpeed(double s) {
     speed -= s * 0.44704;  // Convert miles/h to m/s and decrease speed
 }

 public void setSpeed(double speed) {
     this.speed = speed;
 }
}


}
