function start() {
    var inputValueY = document.getElementById("input");
    var inputValueX = document.getElementById("input2");
    var y = Number(inputValueY.value);
    var x = Number(inputValueX.value);
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    var ins = document.querySelector(".inserisciTesto");
    if (y == randomNumber) {
        ins.innerHTML = "Il ".concat(y, " \u00E8 uguale al numero casuale");
    }
    else if (x == randomNumber) {
        ins.innerHTML = "Il ".concat(x, " \u00E8 uguale al numero casuale");
    }
    else {
        ins.innerHTML = "I numeri inseriti non sono uguali al numero random. Numero Random = ".concat(randomNumber);
    }
}
