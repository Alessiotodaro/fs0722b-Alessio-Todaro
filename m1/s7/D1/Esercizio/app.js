
function Persona(){
    this.nome = "";
    this.cognome = "";   
    this.data = "";
}
let onSub = document.querySelector('.btn').addEventListener('click', function(){
    let nuovaPersona = new Persona();
    nuovaPersona.nome = document.querySelector('.nome').value;
    nuovaPersona.cognome = document.querySelector('.cognome').value;
    nuovaPersona.data = document.querySelector('.data').value
    function newTable(){
        let table = document.querySelector('.tab')
        
        let app = table.innerHTML = "<tr>" + "<td>" + nuovaPersona.nome + "</td>" + "<td>" + nuovaPersona.cognome + "</td>" + "<td>" + nuovaPersona.data + "</td>" +"</tr>"
        table.append(app)
    }
    newTable()
})
