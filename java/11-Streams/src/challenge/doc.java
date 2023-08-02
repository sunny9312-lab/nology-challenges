import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Book {
    private String title;
    private int pages;
    private String author;
    private int yearPublished;

    public Book(String title, int pages, String author, int yearPublished) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    public String getTitle() {
        return title;
    }
}

public class Main {
    public static void main(String[] args) {
        List<Book> books = new ArrayList<>();

        // Create 5 books and store in the ArrayList
        books.add(new Book("Book 1", 300, "Author 1", 2000));
        books.add(new Book("Book 2", 250, "Author 2", 2010));
        books.add(new Book("Book 3", 400, "Author 3", 1995));
        books.add(new Book("Book 4", 150, "Author 4", 2022));
        books.add(new Book("Book 5", 500, "Author 5", 1987));

        // Use streams to create a list of titles converted to uppercase
        List<String> titlesUpperCase = books.stream()
                .map(book -> book.getTitle().toUpperCase())
                .collect(Collectors.toList());

        // Display the list of uppercase titles
        System.out.println("List of Titles (Uppercase):");
        titlesUpperCase.forEach(System.out::println);
    }
}
