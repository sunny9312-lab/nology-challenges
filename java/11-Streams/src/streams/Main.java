package streams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

// Java streams
// very similar to javascript iterators
// allow us to perform operations on a sequence of elements
// .filter
// .map
// .reduce

// before we can use any of those methods, we need to turn our data structure, 
// like Array, ArrayList to a stream

// Stream is a wrapper around a data source
// a pipeline through which data flows

// Why would we want to use streams?
// similar reasons to why we would use iterators in js
// more readable
// less chance bugs

// In Java streams could be more efficient than loops


public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Integer[] numbers = { 1, 2, 3, 4, 5 };
		Integer[] doubled = new Integer[numbers.length];
		
		// I want to double the numbers
		for(int i = 0; i < numbers.length; i++) {
			doubled[i] = numbers[i] * 2;
		}

		
		// instead I can turn the numbers array into a stream
		// .map
		// I am doing this, so I can use stream methods
		Stream<Integer> numberStream = Stream.of(numbers);
		
		// we can pass a function by reference like this:
		// (ClassName::MethodName)
		Stream<Integer> doubledNumberStream = numberStream
				.map(MathHelper::doubleNumber);
		
		// conver the stream back to an array
		Integer[] doubledWithStream = doubledNumberStream
				.toArray(Integer[]::new);
		
		System.out.println(Arrays.toString(doubledWithStream));
		System.out.println(Arrays.toString(numbers));
		
		// lambda function
		
		Integer[] dNums = Stream.of(numbers)
				.map(num -> num * 2)
				.toArray(Integer[]::new);
		
		// filter
		Integer[] moreThanThree = Stream.of(numbers)
				.filter(num -> num > 3)
				.toArray(Integer[]::new);
		
		System.out.println(Arrays.toString(moreThanThree));
		
		// store doubled numbers that are greater than 5
		Integer[] doubledAndMoreThan5 = Stream.of(numbers)
				.map(MathHelper::doubleNumber)
				.filter(num -> num > 5)
				.toArray(Integer[]::new);
		
		System.out.println(Arrays.toString(doubledAndMoreThan5));
		
		// ArrayList
		
		ArrayList<String> names = new ArrayList<String>(Arrays
				.asList("Alex", "Alice", "John", "Kate", "andy"));
		
		System.out.println(names);
		
		ArrayList<String> startsWithA = new ArrayList<>();
		
		for(String name: names) {
			if(name.toLowerCase().charAt(0) == 'a') {
				startsWithA.add(name);
			}
		}
		
		System.out.println(startsWithA);
		
		Stream<String> fromArrayList = names.stream();
		
		ArrayList<String> startsWithAWithStream = fromArrayList
				.filter(n -> n.toLowerCase().charAt(0) == 'a')
				.collect(Collectors
						.toCollection(ArrayList::new));
		
		System.out.println(startsWithAWithStream);
				
		
		// first name that starts with a
		
		Optional<String> firstAName =  startsWithA.stream()
		.filter(n -> n.toLowerCase().charAt(0) == 'a')
		.findFirst();
		
		// monad
		
		if(firstAName.isPresent()) {
			System.out.println(firstAName.get());
		} else {
			System.out.println("Guest");
		}
		
		
		Consultant kate = new Consultant("Kate", "Melbourne");
		Consultant john = new Consultant("John", "Sydney");
		Consultant alice = new Consultant("Alice", "Adelaide");
		
	
				
		Optional<Consultant> maybeConsultant =  Consultant.findById(26);
		
		if(maybeConsultant.isPresent()) {
			System.out.println(maybeConsultant.get().getName() + " found consultant");
		} else {
			System.out.println("Consultant not found");
		}
		
		kate.increaseSalary(5000.00);
		alice.increaseSalary(2000.00);
		
		System.out.println(Consultant.totalSalaryCost());
		
		System.out.println(Consultant.calculateAverage());
		
		Consultant.getConsultants().stream().forEach(Consultant::increaseBy5k);
		
		Consultant.getConsultants().stream()
		.forEach(c -> System.out.println(c.toString()));
		
		// reduce
		// reduce with two parameters
		
		ArrayList<Integer> numbers2 = new ArrayList<>(Arrays.asList(2, 3, 4));
		
		// in js numbers2.reduce((prev, curr) => prev + curr, 0)
		// I had an array of integers, I wanted an integer back
		int sumOfNumbers2 = numbers2.stream().reduce(0, (prev, curr) -> prev + curr);
		System.out.println(sumOfNumbers2 + " with third arg");
		
		ArrayList<String> greetings = new ArrayList<>(Arrays.asList("hi", "hello", "good morning"));
		
		// I want a single string where the geetings are separated by a comma
		// I have an array of strings, I want to reduce it to a single string
		String allGreetings = greetings.stream().reduce("", (prev, curr) -> { 
			// for a sitaution perv = "", curr "hi" -> , hi, hi
			if(prev.equals("")) {
				return curr;
			}
			return prev + ", " + curr; 
			});
		System.out.println(allGreetings);
		
		// I want the lenght of all the greetings
		// I have an array of Strings, I want an integer back
		// n situations where my result of reducing is a different data type to the data type stored in
		// my array, I need a third parameter, a Combiner function
		// (or in situations where I have a parallel stream, so things happen at the same time,
		// I end up with a few smaller sums, I need to combine all the smaller sums into one final sum 
		// of all elements)
		int lengthOfGreetings = greetings.stream().reduce(0, (prev, curr) -> prev + curr.length(), 
				(a, b) -> a + b);
		
		int lengthOfGreetings2 = greetings.stream().reduce(0, (prev, curr) -> prev + curr.length(),
				Integer::sum);
		
		int lengthOfGreetings3 = greetings.stream().reduce(0, (prev, curr) -> prev + curr.length(),
				(a, b) -> Integer.sum(a, b));
		
		System.out.println(lengthOfGreetings);
		System.out.println(lengthOfGreetings2);
		System.out.println(lengthOfGreetings3);
		
		int lenghtWithMap = greetings.stream().map((g) -> g.length()).reduce(0, (prev, curr) -> prev + curr);
		
		System.out.println(lenghtWithMap);
		
		Optional<Integer> maybeSum = numbers2.stream().reduce((prev, curr) -> prev + curr);
		
		ArrayList<Integer> nums3 = new ArrayList<>();
		
		Optional<Integer> maybeSum2 = nums3.stream().reduce(Integer::sum);
		
		System.out.println(maybeSum.get());
		System.out.println(maybeSum.isPresent());
		System.out.println(maybeSum2.isPresent());
		
		// reduce with 1 argument -> returns an empty Optional for an empty stream
		// returns an Optional with the reduction result as the value of that Optional
		
		// reduce with two arguments -> returns the initial(first argument) if the stream is empty
		System.out.println(nums3.stream().reduce(120, Integer::sum));
		
		// reduce with three - code won't compile unless you add a third arg in situations
		// where you are storing one data type in a data structure and you want a different data type 
		// as the reducing result
		
		// in some situations you can first map your stream to a stream of the data type you need
		// then use reduce with two arg
		
		
	}
	
	
	

}
