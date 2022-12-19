function start(){
    var inputValueY = (<HTMLInputElement>document.getElementById("input") as HTMLInputElement);
    var inputValueX = (<HTMLInputElement>document.getElementById("input2") as HTMLInputElement);

    var y = Number(inputValueY.value)
    var x = Number (inputValueX.value)

    let randomNumber:number = Math.floor(Math.random() * 100 + 1);
    const ins: HTMLElement = document.querySelector(".inserisciTesto") as HTMLElement;

    if(y == randomNumber){
        ins.innerHTML =  `Il ${y} è uguale al numero casuale`
    }else if(x == randomNumber){
        ins.innerHTML =  `Il ${x} è uguale al numero casuale`
    }else {
        ins.innerHTML = `I numeri inseriti non sono uguali al numero random. Numero Random = ${randomNumber}`
    }
}

