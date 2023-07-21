package abstracts;

abstract class Account {

	// each account will have some balance
	double balance;
	
	// the interest rate will be different for every account (will return a different number)
	// that's why we add an abstract method, so each class can implement it differently
	abstract double getInterestRate();
	
	// In an abstract class, I can have methods with implementation
	// it allows me to reduce code repetition
	public double getBalanceAfterYears(int years) {
		
		for(int i = 0; i < years; i++) {
			balance += balance * this.getInterestRate();
		}
		
		return this.balance;
	}
	
	public void printBalance() {
		System.out.println("The balance-a is " 
	+ this.balance + " dollars");
	}
	
	
}
