package d2;

public class Rettangolo {
		int larghezza;
		int altezza;

		public Rettangolo(int larghezza , int altezza) {
			this.larghezza = larghezza;
			this.altezza = altezza;
		}
		
		public int area() {
			 return this.larghezza * this.altezza;
		}
		public int perimetro() {
			return this.larghezza + this.larghezza + this.altezza + this.altezza;
		}
		
	}


