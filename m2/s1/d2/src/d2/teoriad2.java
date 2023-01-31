package d2;

import java.util.Scanner;

import d2.Rettangolo;
import java.util.Scanner;

public class teoriad2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Esercizio");
		/*
		Automobile mio = new Automobile();
		mio.marca = "Bmw";
		mio.modello = "320D";
		mio.cilindrata = 2000;
		mio.colore ="Blu Notte";
		mio.cavalli = 150;
		mio.targa = "CL721VL";
		*/
		/*
		Automobile mia = new Automobile("Bmw", "320D","CL721VL", "Blu Notte",150,2000);
		System.out.println(mia.info());
		*/
		Scanner sc = new Scanner(System.in);
		System.out.println("Calcoliamo l'area di un rettangolo. Inserisci la larghezza: ");
		int larghezza = sc.nextInt();
		System.out.println("Adesso inserisci altezza: ");
		int altezza = sc.nextInt();
		
		Rettangolo area = new Rettangolo(larghezza,altezza);
		
		System.out.println("L'area del rettangolo inserito è " + area.area() + " cm");
		
		System.out.println("Adesso calcoliamo il perimetro. Inserisci il primo lato lungo: ");
		int latoLungo = sc.nextInt();
		
		System.out.println("Adesso inserisci il lato corto: ");
		int latoCorto = sc.nextInt();
		Rettangolo perimetro = new Rettangolo (latoCorto,latoLungo);
		if (latoLungo < latoCorto) {
			System.out.println("Il lato lungo deve essere maggiore di quello corto");
		}else {
		System.out.println("Il perimetro del rettangolo inserito è: " + perimetro.perimetro() + " cm");
		}
		
		Sim sim1 = new Sim(32878, 0, 0);
		System.out.println("Inserisci il numero 1 per visualizzare il numero sim. Inserisci numero 2 per visualizzare credito. Inserisci numero 3 per ultime telefonate");
		int scelta = sc.nextInt();
		if(scelta == 1) {
			System.out.println(sim1.showNumber());
		}else if (scelta == 2) {
			System.out.println(sim1.showCredit());
		}else if(scelta == 3) {
			System.out.println(sim1.showLastCall());
		}else {
			System.out.println("Inserisci un numero da 1 a 3 per scegliere l'informazione giusta");
		}
		
	}
		
		
	

}
