let calendar = new Date();
function Persona(){
    this.nome = "";
    this.cognome = "";   
    this.data = "";
}
let onSub = document.querySelector('.btn').addEventListener('click', function(){
    let nuovaPersona = new Persona();
    let prova = document.querySelector('.data').value
    nuovaPersona.nome = document.querySelector('.nome').value;
    nuovaPersona.cognome = document.querySelector('.cognome').value;
    nuovaPersona.data = prova

    function firstFunction (prova) {
        let timestamp = Date.parse(prova);
        let today = new Date().getTime();
        let diff = ( today - timestamp ) / ( 1000 * 60 * 60 * 24 * 365 );
        let n = parseInt( diff, 10 );
        return n;
    };
    let test = firstFunction()
    console.log(test)
    function newTable(){
        let table = document.querySelector('.tab')
        table.innerHTML = `<tr><td> ${nuovaPersona.nome}</td><td>${nuovaPersona.cognome}</td><td>${test}</td></tr>`
        table.append
    }
    newTable()
})
