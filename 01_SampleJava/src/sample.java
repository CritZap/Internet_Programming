
public class sample {
		public static void main(String[] args) {
				int a = 5;
				int b = 6;
				
				for (int i = 0; i <= a+b; i++) {
					System.out.println("Number " + i);
				}
				
				if(a > b) {
					System.out.println("a is bigger than b");
				} else if(a == b) {
					System.out.println("a is equal to b");
				} else {
					System.out.println("a is less than b");
				}
				
				Drink whiskey = new Drink(10);
				Drink beer = new Drink(4);
				
				if(whiskey == beer) {
					System.out.println("You drunk ?");
				} else {
					System.out.println("Whiskey is not beer you twat");
				}
		}
}
