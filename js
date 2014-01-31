package yenijavaproje;
import java.util.Scanner;

public class javaproje {

	public static void main(String[] args)
	
	
	{
		
	int a,b;
	Scanner scn = new Scanner(System.in);
	
	
	
	System.out.println("1. sayıyı giriniz ");
	a = scn.nextInt();
	
	System.out.println("2. sayıyı giriniz ");
	b = scn.nextInt();
	
	int sonuc = Topla(a, b);
	System.out.println("bu sayilarin toplami = "+sonuc );

		

	}
       public static int Topla(int sayi1, int sayi2)
       
       {

  int sonuc = sayi1 + sayi2;
  return sonuc;

       }
}
