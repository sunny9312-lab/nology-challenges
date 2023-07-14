package random;

import classes.Person;   //다른 패키지에서 가지고 온다. Person을

public class Random {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Person person1 = new Person();
		person1.name = "Alice";
		person1.age = 20;
		System.out.println(person1.name);
		System.out.println(person1.age); //age가 같은 패기지안에 있지 않아서에러남.
	}

}
