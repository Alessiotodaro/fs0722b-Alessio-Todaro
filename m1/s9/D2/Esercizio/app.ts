let inputValue = (<HTMLInputElement>document.getElementById("importo")).value;
class Account {
    saldoAttuale = 0

    oneDeposit(inputValue:number){
        let testo = <HTMLElement>document.getElementById('madre');
        let res:number = this.saldoAttuale + inputValue
        testo.innerText = `Deposito effettuato. Saldo totale: ${res}`;
    }
    oneWithDraw(inputValue:number){
        let testo = <HTMLElement>document.getElementById('madre');
        let res = this.saldoAttuale - inputValue;
        testo.innerText = `Prelievo effettuato. Saldo totale: ${res}`;
    }
}

class Madre extends Account {
    addInterest(){
        let totaleInteressi = this.saldoAttuale / 100 * 10;
        let testo = <HTMLElement>document.getElementById('madre');
        testo.innerText = `Controllo interessi effettuato. Interessi totali: ${totaleInteressi}`;
    }
}
let account = new Account()
let madre = new Madre()