package interfaces;

// What are interfaces?
// A way of describing the behaviour of a class - what methods it should have
// A contract that a class must fulfill
// A way to force a class to provide method implementations
// Instructions on what a class should do

// Why should we use interfaces?
// so our team can understand the code requirement better
// they allow us to use the concept of polymorphism

// I cannot instantiate an interface, but I can use it as a data type

// Naming conventions for interfaces
// ISomething
// Something-able
// MakesSound, DoesSomething


public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Cat cat = new Cat();
		Dog dog = new Dog();
		Ant ant = new Ant();
		System.out.println(cat.sound());
		System.out.println(dog.sound());
		
		// Polymorphism - I can treat cat and dog as MakesSound

		MakesSound[] animals = { cat, dog };
		
		AnimalUtils.printAnimalInfo(dog);
		AnimalUtils.printAnimalInfo(cat);
		// this won't compile, ant doesn't implement MakesSound interface
//		AnimalUtils.printAnimalInfo(ant);
		
		String[] bookCharacters = { "Raskolnikov" };
		
		Book book = new Book(534, 12, 
				"Crime and Punishment", 
				bookCharacters);
		
		System.out.println(book.getInfo());
		book.getCharacters();
		
		String[] harryPotterChars = { "Ron", "Hagrid" };
		Film harryPotter = new Film("Prisoner of Azkaban", 
				(short)2004, 
				harryPotterChars);
		
		IMedia[] booksAndFilms = { book, harryPotter}; 
		
		for(int i = 0; i < booksAndFilms.length; i++) {
			System.out.println(booksAndFilms[i].getInfo());
		}
		
		Circle circle = new Circle();
		System.out.println(circle.getArea());
		System.out.println(circle.getPerimeter());
		
		Player newPlayer = new Player();
		System.out.println(newPlayer.health);
		Arrow arrow = new Arrow();
		arrow.apply(newPlayer);
		System.out.println(newPlayer.health);
		
		HealthPotion healthPotion = new HealthPotion();
		healthPotion.apply(newPlayer);
		System.out.println(newPlayer.health);
	}

}
