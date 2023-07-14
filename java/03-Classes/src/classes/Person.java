package classes;

public class Person {
	public String name;
	protected byte age;  //int를 private으로 하니까 main에서 못불르고 에러가남.그래서 그냥 이렇게
                            //protected는 같은 package에서는 에러가 않난다.
						//이 부분에서 컨스트럭터 얘기 한거 같은데 잘 이해않됨. 
	public Person(String name, int age) {
		this.name = name;
		this.age = (byte) age;
	}
	
	
}  