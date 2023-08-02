package challenge;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

public class Main {

	public static void main(String[] args) {
		
		//In Main create 5 books and store in an ArrayList
		
//		ArrayList<String> Book1 = new ArrayList<>();
//		ArrayList<String> Book2 = new ArrayList<>();
//		ArrayList<String> Book3 = new ArrayList<>();
//		ArrayList<String> Book4 = new ArrayList<>();
//		ArrayList<String> Book5 = new ArrayList<>();
		
		
		
//		books.add(new Book("Book 1", 100, "Author1", 1980));
		Book book1 =  new Book("Book1",  100, "Author1", 1980));
		ArrayList<Book> allBooks = new ArrayList<>()Arrays.asList(book1, book2, book3,book4, book5);

		ArrayList<String> upperCaseTitles = allBooks.stream().map((book) -> book.getTitle().toUpperCase()).collect(Collectors.toCollection(ArrayList::new));
		System.out.println(upperCasetTitles);
		
		allBooks.stream().filter((book)->book.getYearPublished()>2000).collect(Collectors.toCollection(ArrayList::new));
		after2000.stream().forEach((book)-> book.printBookDetails());
		
		int allPages = allBooks.reduce(0, (prev,curr) -> prev + curr.getPages());
		
		int allPages2 = allBooks.stream().map((book) -> book.getPages()).reduce(0, (prev, curr) -> prev + curr);
		System.out.println(allPages + "," + allPages2);
		
		Book maxPages = allBooks.stream().max((b1,b2) -> Integer.compare(b1.getPages(),  b2getPages())).orElse(book1);
		
		maxPages.printBookDetails();
		//또다른 방법 
		

	
	}
}
