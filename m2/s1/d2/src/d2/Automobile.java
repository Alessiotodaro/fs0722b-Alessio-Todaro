package d2;

public class Automobile {
	String modello;
	String marca;
	String targa;
	String colore;
	int cilindrata;
	int cavalli;
	
	public Automobile(String modello,String marca,String targa,String colore, int cilindrata , int cavalli) {
		this.modello = modello;
		this.marca = marca;
		this.targa =  targa;
		this.colore = colore;
		this.cavalli = cavalli;
		this.cilindrata = cilindrata;
		
	}
	
	public void start() {
		System.out.println("Motore acceso");
	}
	public void stop() {
		System.out.println("Motore spento");
	}
	public String info() {
		return this.marca + " " + this.modello + " " + this.colore + " " + this.cilindrata + " " + this.cavalli + " " + this.targa;
	}
}
