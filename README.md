plus


package newjava;
import java.util.Scanner;

public class javaproject {

	public static void main(String[] args)
	
	
	{
		
	int a,b;
	Scanner scn = new Scanner(System.in);
	
	
	
	System.out.println("1. enter number ");
	a = scn.nextInt();
	
	System.out.println("2. enter number ");
	b = scn.nextInt();
	
	int total = Plus(a, b);
	System.out.println("plus that number = "+total );

		

	}
       public static int Topla(int number1, int number2)
       
       {

  int total = number1 +  number2;
  return total;

       }
}
