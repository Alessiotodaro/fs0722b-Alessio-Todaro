var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var inputValue = document.getElementById("importo").value;
var Account = /** @class */ (function () {
    function Account() {
        this.saldoAttuale = 0;
    }
    Account.prototype.oneDeposit = function (inputValue) {
        var testo = document.getElementById('madre');
        var res = this.saldoAttuale + inputValue;
        testo.innerText = "Deposito effettuato. Saldo totale: ".concat(res);
    };
    Account.prototype.oneWithDraw = function (inputValue) {
        var testo = document.getElementById('madre');
        var res = this.saldoAttuale - inputValue;
        testo.innerText = "Prelievo effettuato. Saldo totale: ".concat(res);
    };
    return Account;
}());
var Madre = /** @class */ (function (_super) {
    __extends(Madre, _super);
    function Madre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Madre.prototype.addInterest = function () {
        var totaleInteressi = this.saldoAttuale / 100 * 10;
        var testo = document.getElementById('madre');
        testo.innerText = "Controllo interessi effettuato. Interessi totali: ".concat(totaleInteressi);
    };
    return Madre;
}(Account));
var account = new Account();
var madre = new Madre();
