package d2;

public class Sim {
	int numero;
	int credito;
	int ultimeTelefonate;
	
	public Sim (int numero, int credito, int ultimeTelefonate) {
		this.numero = numero;
		this.credito = credito;
		this.ultimeTelefonate = ultimeTelefonate;	
	}
	public int showNumber() {
		return numero;
	}
	public int showCredit() {
		return credito;
	}
	public int showLastCall() {
		return ultimeTelefonate;
	}
	
}
